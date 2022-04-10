const URL = 'https://randomuser.me/api'

/**
 * TODO: Get Men/Women only user by request multiple time
 * TODO: Save to local with pouchdb
 */
export function getRandomUser() {
  return fetch(URL).then(response => response.json())
}
