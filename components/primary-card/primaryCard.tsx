import styled from '@emotion/styled'
import { format, fromUnixTime } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { Label } from '../label'

export const PrimaryCard = ({ data, index }) => {
  const [day, setDay] = useState<string>(null)

  useEffect(() => {
    setDay(format(fromUnixTime(data.dt), 'eeee'))
  }, [])

  return (
    <Container>
      <div>
        <Temperature>{Math.round(data.temp.max)}</Temperature>
        <span>{data.weather[0].main}</span>
      </div>

      <WeatherIcon
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
      />

      <Label>{index === 0 ? 'Today' : day}</Label>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  height: calc(80vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Temperature = styled.div`
  position: relative;
  font-size: 76px;

  &:after {
    content: '°';
    position: absolute;
  }
`

const WeatherIcon = styled.img`
  width: 100px;
  max-width: 200px;
  height: 100px;
  margin: 0 auto;
`
