// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
}

// GET: forecast weather
export const getForecast = async (lat: number, long: number) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&units=imperial&appid=${publicRuntimeConfig.WEATHER_KEY}`
  )
  try {
    return response.data
  } catch (error) {
    return error
  }
}
