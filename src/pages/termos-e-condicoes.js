import Floating from "components/floating";
import Layout from "components/layout";
import SEO from "components/seo";
import { StickyProvider } from "contexts/app/app.provider";
import { VideoProvider } from "contexts/video/video.provider";
import Banner from "sections/banner";
import theme from "theme";
import { ThemeProvider } from "theme-ui";

export default function TermosECondicoesPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StickyProvider>
          <VideoProvider>
            <Layout>
              <SEO />
              <Banner />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignIgems: "center",
                  justifyContent: "center",
                  margin: "2rem 0",
                }}
              >
                <div
                  style={{
                    maxWidth: "720px",
                    width: "100%",
                    padding: "1.4rem",
                  }}
                >
                  <h2>1. Termos</h2>
                  <p>
                    Ao acessar ao site{" "}
                    <a href="https://desenvolvedordeaplicativos.com.br">
                      Leonel Informática
                    </a>
                    , concorda em cumprir estes termos de serviço, todas as leis
                    e regulamentos aplicáveis e concorda que é responsável pelo
                    cumprimento de todas as leis locais aplicáveis. Se você não
                    concordar com algum desses termos, está proibido de usar ou
                    acessar este site. Os materiais contidos neste site são
                    protegidos pelas leis de direitos autorais e marcas
                    comerciais aplicáveis.
                  </p>
                  <h2>2. Uso de Licença</h2>
                  <p>
                    É concedida permissão para baixar temporariamente uma cópia
                    dos materiais (informações ou software) no site Leonel
                    Informática , apenas para visualização transitória pessoal e
                    não comercial. Esta é a concessão de uma licença, não uma
                    transferência de título e, sob esta licença, você não pode:{" "}
                  </p>
                  <ol>
                    <li>modificar ou copiar os materiais; </li>
                    <li>
                      usar os materiais para qualquer finalidade comercial ou
                      para exibição pública (comercial ou não comercial);{" "}
                    </li>
                    <li>
                      tentar descompilar ou fazer engenharia reversa de qualquer
                      software contido no site Leonel Informática;{" "}
                    </li>
                    <li>
                      remover quaisquer direitos autorais ou outras notações de
                      propriedade dos materiais; ou{" "}
                    </li>
                    <li>
                      transferir os materiais para outra pessoa ou 'espelhe' os
                      materiais em qualquer outro servidor.
                    </li>
                  </ol>
                  <p>
                    Esta licença será automaticamente rescindida se você violar
                    alguma dessas restrições e poderá ser rescindida por Leonel
                    Informática a qualquer momento. Ao encerrar a visualização
                    desses materiais ou após o término desta licença, você deve
                    apagar todos os materiais baixados em sua posse, seja em
                    formato eletrónico ou impresso.
                  </p>
                  <h2>3. Isenção de responsabilidade</h2>
                  <ol>
                    <li>
                      Os materiais no site da Leonel Informática são fornecidos
                      'como estão'. Leonel Informática não oferece garantias,
                      expressas ou implícitas, e, por este meio, isenta e nega
                      todas as outras garantias, incluindo, sem limitação,
                      garantias implícitas ou condições de comercialização,
                      adequação a um fim específico ou não violação de
                      propriedade intelectual ou outra violação de direitos.
                    </li>
                    <li>
                      Além disso, o Leonel Informática não garante ou faz
                      qualquer representação relativa à precisão, aos resultados
                      prováveis ou à confiabilidade do uso dos materiais em seu
                      site ou de outra forma relacionado a esses materiais ou em
                      sites vinculados a este site.
                    </li>
                  </ol>
                  <h2>4. Limitações</h2>
                  <p>
                    Em nenhum caso o Leonel Informática ou seus fornecedores
                    serão responsáveis por quaisquer danos (incluindo, sem
                    limitação, danos por perda de dados ou lucro ou devido a
                    interrupção dos negócios) decorrentes do uso ou da
                    incapacidade de usar os materiais em Leonel Informática,
                    mesmo que Leonel Informática ou um representante autorizado
                    da Leonel Informática tenha sido notificado oralmente ou por
                    escrito da possibilidade de tais danos. Como algumas
                    jurisdições não permitem limitações em garantias implícitas,
                    ou limitações de responsabilidade por danos conseqüentes ou
                    incidentais, essas limitações podem não se aplicar a você.
                  </p>
                  <h2>5. Precisão dos materiais</h2>
                  <p>
                    Os materiais exibidos no site da Leonel Informática podem
                    incluir erros técnicos, tipográficos ou fotográficos. Leonel
                    Informática não garante que qualquer material em seu site
                    seja preciso, completo ou atual. Leonel Informática pode
                    fazer alterações nos materiais contidos em seu site a
                    qualquer momento, sem aviso prévio. No entanto, Leonel
                    Informática não se compromete a atualizar os materiais.
                  </p>
                  <h2>6. Links</h2>
                  <p>
                    O Leonel Informática não analisou todos os sites vinculados
                    ao seu site e não é responsável pelo conteúdo de nenhum site
                    vinculado. A inclusão de qualquer link não implica endosso
                    por Leonel Informática do site. O uso de qualquer site
                    vinculado é por conta e risco do usuário.
                  </p>

                  <h3>Modificações</h3>
                  <p>
                    O Leonel Informática pode revisar estes termos de serviço do
                    site a qualquer momento, sem aviso prévio. Ao usar este
                    site, você concorda em ficar vinculado à versão atual desses
                    termos de serviço.
                  </p>
                  <h3>Lei aplicável</h3>
                  <p>
                    Estes termos e condições são regidos e interpretados de
                    acordo com as leis do Leonel Informática e você se submete
                    irrevogavelmente à jurisdição exclusiva dos tribunais
                    naquele estado ou localidade.
                  </p>
                </div>
              </div>
            </Layout>
          </VideoProvider>
        </StickyProvider>
      </ThemeProvider>
      <Floating />
    </>
  );
}