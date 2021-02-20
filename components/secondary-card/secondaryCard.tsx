import styled from '@emotion/styled'
import { useContext } from 'react'
import { theme } from '../../constants/theme'
import { WeatherContext } from '../../context/weather.context'

export const SecondaryCard = ({ index, active }) => {
  const weatherContext = useContext(WeatherContext)
  return (
    <Container active={active}>
      <img
        src={`https://via.placeholder.com/30/000/666/&text=${weatherContext.forecast.Days[index].Timeframes[0].wx_desc}`}
      />
      <div>{weatherContext.forecast.Days[index].Timeframes[0].temp_f}</div>
    </Container>
  )
}

interface ContainerProps {
  active: boolean
}

const Container = styled.div<ContainerProps>`
  padding: 4px;
  border-radius: 6px;
  background: ${(props) => (props.active ? `${theme.colors.altBg}` : 'none')};
`
