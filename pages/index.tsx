import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Carousel from 'nuka-carousel'
import React, { useContext } from 'react'
import { Controls } from '../components/controls'
import { Label } from '../components/label'
import { PrimaryCard } from '../components/primary-card/primaryCard'
import { theme } from '../constants/theme'
import { WeatherContext } from '../context/weather.context'

const drawerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export default function Home() {
  const weatherContext = useContext(WeatherContext)

  return (
    <main>
      <PageContainer>
        {theme.backgrounds.map((item, index) => {
          return (
            <Backdrop
              key={index}
              index={index}
              activeIndex={weatherContext.activeIndex}
            />
          )
        })}
        {weatherContext.loading ? (
          <>Loading</>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            transition={{ duration: 0.25 }}
          >
            <LabelContainer>
              <Label>
                {weatherContext.city ? weatherContext.city : 'loading'}
              </Label>
            </LabelContainer>

            {weatherContext.forecast && (
              <CarouselContainer>
                <Carousel
                  afterSlide={(currentSlide) => {
                    weatherContext.setActiveIndex(currentSlide)
                  }}
                  enableKeyboardControls
                  renderBottomCenterControls={(props) => Controls(props)}
                  renderCenterLeftControls={null}
                  renderCenterRightControls={null}
                >
                  {weatherContext.forecast.daily.map((day, index) => {
                    return <PrimaryCard key={index} index={index} data={day} />
                  })}
                </Carousel>
              </CarouselContainer>
            )}
          </motion.div>
        )}
      </PageContainer>
    </main>
  )
}

const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 20px 0;
  overflow: hidden;
`

const LabelContainer = styled.div`
  margin-bottom: 40px;
`

const CarouselContainer = styled(motion.div)``

interface BackdropProps {
  index: number
  activeIndex: number
}

const Backdrop = styled.div<BackdropProps>`
  z-index: -1;
  position: absolute;
  opacity: ${(props) => (props.index === props.activeIndex ? 1 : 0)};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.index
      ? `${theme.backgrounds[props.index].gradient}`
      : 'linear-gradient(135deg, #1DDDDB, #26EEE9)'};
  transition: opacity 500ms ease-in-out;
`
