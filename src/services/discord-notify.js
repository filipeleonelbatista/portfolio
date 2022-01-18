export const bots = {
  bot: 'https://discord.com/api/webhooks/933095680904421466/B4t1wZzoSwNGKrGwZabgcHrdGILQMsXdy75XHQtkpTjuHJoh4pefxt2mlnEpSOJwGAjx',
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