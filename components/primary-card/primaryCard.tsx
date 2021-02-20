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
      <Temperature>{Math.round(data.temp.max)}</Temperature>

      <div>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
      </div>

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
  font-size: 88px;

  &:after {
    content: '°';
    position: absolute;
  }
`
