import { createContext, useEffect, useState } from 'react'
import { getCityName } from '../api/cityName'
import { getCurrent, getForecast } from '../api/weather'
import { CurrentWeather } from '../interfaces/interfaces'

export interface WeatherContext {
  current?: CurrentWeather | null
  setCurrent?: (currentWeather: CurrentWeather) => void
  forecast?: any
  setForecast?: (arg: any) => void
  loading: boolean
  setLoading?: (arg: boolean) => void
  geoLoc: any
  setGeoLoc: (arg: Geolocation) => void
  geoLocError: string
  setGeoLocError: (arg: Geolocation) => void
  activeIndex: number
  setActiveIndex: (arg: number) => void
  city: string
  setCity: (arg: string) => void
}

export const WeatherContext = createContext<WeatherContext | null>(null)

export const WeatherContextProvider = ({ children }) => {
  const [geoLoc, setGeoLoc] = useState(null)
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(true)
  const [geoLocError, setGeoLocError] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [city, setCity] = useState(null)

  function getLoc() {
    function success(position) {
      setGeoLoc({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    }

    function error(error) {
      console.log(`ERROR(${error.code}): ${error.message}`)
      setGeoLocError(`ERROR(${error.code}): ${error.message}`)
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }

  async function getCity() {
    try {
      const data = await getCityName(geoLoc.latitude, geoLoc.longitude)
      setCity(data.locality)
    } catch (error) {
      return error
    }
  }

  async function getCurrentWeather() {
    try {
      const currentRes = await getCurrent(geoLoc.latitude, geoLoc.longitude)
      const forecastRes = await getForecast(geoLoc.latitude, geoLoc.longitude)
      setCurrent(currentRes)
      setForecast(forecastRes)
    } catch (error) {
      return error
    }
  }

  // first get geo location
  useEffect(() => {
    getLoc()
  }, [])

  // then get weather & city name
  useEffect(() => {
    getCurrentWeather()
    getCity()
  }, [geoLoc])

  useEffect(() => {
    if (geoLoc && city && forecast) {
      setLoading(false)
    }
  }, [geoLoc, city, forecast])

  return (
    <WeatherContext.Provider
      value={{
        current,
        setCurrent,
        forecast,
        setForecast,
        loading,
        setLoading,
        geoLoc,
        setGeoLoc,
        geoLocError,
        setGeoLocError,
        activeIndex,
        setActiveIndex,
        city,
        setCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}
