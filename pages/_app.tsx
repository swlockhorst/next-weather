import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import React from 'react'
import { IsTabletContextProvider } from '../context/isTablet'
import { WeatherContextProvider } from '../context/weather.context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}

          *,
          *:after,
          *:before {
            box-sizing: border-box;
          }

          *,
          *:focus {
            outline: none;
          }

          html {
            font-family: Roboto, sans-serif;
          }
        `}
      />
      <IsTabletContextProvider>
        <WeatherContextProvider>
          <Component {...pageProps} />
        </WeatherContextProvider>
      </IsTabletContextProvider>
    </>
  )
}

export default MyApp
