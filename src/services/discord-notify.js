export const bots = {
  bot: 'https://discord.com/api/webhooks/927635993106980894/N7uy-WZ7KoasJ7WKbFMv8UOjHWLtm5djTqN3LTGZjvsAc2EPXVFxxKFuycIgGML1MpDo',
}
export const sendDiscordNotification = async (message, bot) => {
  const requestPayload = {
    content: message,
    allowed_mentions: {
      parse: ['users'],
    },
  }

  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(requestPayload),
  }
  const endpoint = bots[bot]

  return new Promise((resolve, reject) => {
    fetch(endpoint, requestOptions)
      .then((resp) => {
        resolve(resp.status)
      })
      .catch(reject)
  })
}