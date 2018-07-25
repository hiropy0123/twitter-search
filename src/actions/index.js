import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://api.twitter.com/1.1/search/tweets.json'
const QUERYSTRING = ''

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  console.log(response)
  dispatch({ type: READ_EVENTS, response })
}