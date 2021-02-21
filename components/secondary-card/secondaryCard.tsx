import styled from '@emotion/styled'
import { useContext } from 'react'
import { theme } from '../../constants/theme'
import { WeatherContext } from '../../context/weather.context'

export const SecondaryCard = ({ index, active }) => {
  const weatherContext = useContext(WeatherContext)

  console.log(weatherContext)
  return (
    <Container active={active}>
      <ImageContainer>
        <WeatherIcon
          src={`http://openweathermap.org/img/wn/${weatherContext.forecast.daily[index].weather[0].icon}@2x.png`}
        />
      </ImageContainer>
      <div>{Math.round(weatherContext.forecast.daily[index].temp.max)}</div>
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

const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`

const WeatherIcon = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin: 0 auto;
`
