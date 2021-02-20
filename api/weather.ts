// http://api.weatherunlocked.com/api/forecast/us.33109?app_id=APP_ID&app_key=APP_KEY
import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

// GET: current weather
export const getCurrent = async (lat: number, long: number) => {
  const response = await axios.get(
    `http://api.weatherunlocked.com/api/current/${lat},${long}?app_id=${publicRuntimeConfig.WEATHER_UNLOCKED_APP_ID}&app_key=${publicRuntimeConfig.WEATHER_UNLOCKED_KEY}`
  )
  try {
    return response.data
  } catch (error) {
    return error
  }
}

// GET: forecast weather
export const getForecast = async (lat: number, long: number) => {
  const response = await axios.get(
    `http://api.weatherunlocked.com/api/forecast/${lat},${long}?app_id=${publicRuntimeConfig.WEATHER_UNLOCKED_APP_ID}&app_key=${publicRuntimeConfig.WEATHER_UNLOCKED_KEY}`
  )
  try {
    return response.data
  } catch (error) {
    return error
  }
}
