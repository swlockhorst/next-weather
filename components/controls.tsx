import styled from '@emotion/styled'
import React from 'react'
import { SecondaryCard } from './secondary-card/secondaryCard'

export const Controls = ({
  cellAlign,
  cellSpacing,
  currentSlide,
  frameWidth,
  goToSlide,
  nextSlide,
  previousSlide,
  slideCount,
  slidesToScroll,
  slidesToShow,
  slideWidth,
  wrapAround,
}) => {
  return (
    <Container>
      <List>
        {[...Array(slideCount)].map((sc, i) => (
          <Button
            key={i + 1}
            onClick={() => {
              goToSlide(i)
            }}
          >
            <SecondaryCard
              active={currentSlide === i ? true : false}
              index={i}
            />
          </Button>
        ))}
      </List>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 1024px;
`

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0;
  padding: 20px 0;
`

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
`
