import styled from '@emotion/styled'
import { useContext } from 'react'
import { theme } from '../../constants/theme'
import { WeatherContext } from '../../context/weather.context'

export const SecondaryCard = ({ index, active }) => {
  const weatherContext = useContext(WeatherContext)

  console.log(weatherContext)
  return (
    <Container active={active}>
      <img
        src={`http://openweathermap.org/img/wn/${weatherContext.forecast.daily[index].weather[0].icon}@2x.png`}
      />
      <div>{weatherContext.forecast.daily[index].temp.max}</div>
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
