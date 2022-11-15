import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import ColorSelected from '../context/ColorSelected.context'
import useNeighbours from '../hooks/useNeighbours'

const Pixel = ({ width, id }: { width: number; id: string }): JSX.Element => {
  const { colorSelected } = useContext(ColorSelected)
  const [color, setColor] = useState<string>('#ffffff')
  const [prevColor, setPrevColor] = useState<string>(color)
  const pixel = useRef<any>(undefined)
  const { findNeihbours } = useNeighbours()

  const handleClick = () => {
    /* const tool = 'fill'
    const pixelColor = pixel.current.style.backgroundColor

    if (tool === 'fill') {
      findNeihbours(pixel?.current).forEach(el => {
        el.setAttribute('style', `background-color: ${pixelColor};`)
      })
    } */
    setColor(colorSelected)
    setPrevColor(colorSelected)
  }

  const changeOnHover = () => {
    setColor((prev: string) => {
      setPrevColor(prev)
      return colorSelected
    })
  }

  const resetColor = () => {
    setColor((prev: string) => {
      setPrevColor(prev)
      return prevColor
    })
  }

  return (
    <Pix
      ref={pixel}
      id={id}
      width={width}
      style={{ backgroundColor: color }}
      onMouseEnter={changeOnHover}
      onMouseLeave={resetColor}
      onClick={handleClick}
    ></Pix>
  )
}
export default Pixel

const Pix = styled.div<{ width: number }>`
  border: 0.5px solid #000000;
  width: calc(${({ width }) => `550px / ${width}`});
`
