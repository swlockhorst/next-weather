// http://api.weatherunlocked.com/api/forecast/us.33109?app_id=APP_ID&app_key=APP_KEY
import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const config = {
  headers: {
    'Access-Control-Allow-Origin': 'https://next-weather-fkf4ctnag.vercel.app/',
    'Content-Type': 'application/json',
  },
}

// GET: current weather
export const getCurrent = async (lat: number, long: number) => {
  const response = await axios.get(
    `https://api.weatherunlocked.com/api/current/${lat},${long}?app_id=${publicRuntimeConfig.WEATHER_UNLOCKED_APP_ID}&app_key=${publicRuntimeConfig.WEATHER_UNLOCKED_KEY}`,
    config
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
    `https://api.weatherunlocked.com/api/forecast/${lat},${long}?app_id=${publicRuntimeConfig.WEATHER_UNLOCKED_APP_ID}&app_key=${publicRuntimeConfig.WEATHER_UNLOCKED_KEY}`,
    config
  )
  try {
    return response.data
  } catch (error) {
    return error
  }
}
