export const bots = {
  bot: 'https://discord.com/api/webhooks/922527209367961661/Watpbw6qJ5CZmhyW3fIZEv1afAaQ0fbGlheLj6kk_zoPhBpNJi99hvMboSWH7mzRvq4u',
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