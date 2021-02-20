import axios from 'axios'

// GET: city name
export const getCityName = async (lat: number, long: number) => {
  const response = await axios.get(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
  )
  try {
    return response.data
  } catch (error) {
    return error
  }
}
