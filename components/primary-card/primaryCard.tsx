import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { weekday } from '../../utils/weekday'
import { Label } from '../label'

export const PrimaryCard = ({ data, index }) => {
  const [day, setDay] = useState<string>(null)

  useEffect(() => {
    setDay(weekday(data.date))
  }, [])

  return (
    <Container>
      <Temperature>{Math.round(data.Timeframes[0].temp_f)}</Temperature>

      <div>
        <img
          src={`https://via.placeholder.com/222/000/666/&text=${data.Timeframes[0].wx_desc}`}
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
