import axios from "axios"

export default async function AsyncPostItem() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
  return response.data
}
