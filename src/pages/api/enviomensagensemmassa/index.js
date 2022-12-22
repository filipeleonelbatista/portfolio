import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const {
    query: { email },
    body: { requester_email, password, request_date, selected_plan },
    method,
  } = req

  const jsonDirectory = path.resolve(process.cwd(), 'src', 'pages', 'api', 'enviomensagensemmassa', 'data');
  const fileContents = JSON.parse(await fs.readFile(jsonDirectory + '/users.json', 'utf8'))

  switch (method) {
    case 'GET':
      if (email) {
        const findedUser = fileContents.filter(item => item.email === email)
        res.status(200).json({ user: findedUser[0] })
      } else {
        res.status(200).json(fileContents)
      }
      break
    case 'POST':
      const user = {
        email: requester_email,
        password,
        request_date,
        payment_date: 0,
        selected_plan,
        is_active: false
      }

      const findedUser = fileContents.filter(user => user.email === requester_email)

      if (findedUser.length > 0) {
        return res.status(200).json({ message: "Usuário já cadastrado. Aguarde a validação do pagamento.", status: false })
      }
      
      fileContents.push(user)

      const data = JSON.stringify(fileContents)

      await fs.writeFile(jsonDirectory + '/users.json', data)

      res.status(201).json({ user, status: true })
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
