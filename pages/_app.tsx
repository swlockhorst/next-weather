import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'
import Head from 'next/head'
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
            background-color: #05bcff;
          }
        `}
      />
      <IsTabletContextProvider>
        <WeatherContextProvider>
          <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="mobile-web-app-capable" content="yes" />

            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta
              name="Weather"
              content="Weather app built by Steven Lockhorst"
            />

            <title>Weather</title>

            <link rel="manifest" href="/manifest.json" />
            <link
              href="/icons/icon-16x16.png"
              rel="icon"
              type="image/png"
              sizes="16x16"
            />
            <link
              href="/icons/icon-32x32.png"
              rel="icon"
              type="image/png"
              sizes="32x32"
            />
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
            <meta name="theme-color" content="#317EFB" />
          </Head>
          <Component {...pageProps} />
        </WeatherContextProvider>
      </IsTabletContextProvider>
    </>
  )
}

export default MyApp
