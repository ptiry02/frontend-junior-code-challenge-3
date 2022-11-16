import { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import ColorSelected from '../context/ColorSelected.context'
import ToolSelected from '../context/Tool.context'
import useNeighbours from '../hooks/useNeighbours'
import { Colors, Tools } from '../Types/enums'

const Pixel = ({ width, id }: { width: number; id: string }): JSX.Element => {
  const [color, setColor] = useState<Colors>(Colors.White)
  const [prevColor, setPrevColor] = useState<Colors>(color)
  const { colorSelected } = useContext(ColorSelected)
  const { tool } = useContext(ToolSelected)
  const pixel = useRef<any>(undefined)

  // This is a custom hook to get the neighbouring pixels of the one that has been clicked on.
  const { findNeighbours } = useNeighbours()

  const handleClick = () => {
    // To change color of neighbouring pixels I decided to do it by manipulating DOM...
    // It may not be the best prectice but I could not find another way.
    const pixelColor = pixel.current.style.backgroundColor

    if (tool === Tools.bucket) {
      findNeighbours(pixel?.current).forEach(el => {
        if (el) {
          el.setAttribute('style', `background-color: ${pixelColor};`)
        }
      })
    }

    // Pencil changes the "pixel" background color through state
    if (tool === Tools.pencil) {
      setColor(colorSelected)
      setPrevColor(colorSelected)
    }
  }

  // These two functions control the hovering functionality
  const changeOnHover = () => {
    if (tool === Tools.pencil) {
      setPrevColor(pixel.current.style.backgroundColor)
      setColor(colorSelected)
    }
  }

  const resetColor = () => {
    if (tool === Tools.pencil) {
      setColor(prevColor)
    }
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
