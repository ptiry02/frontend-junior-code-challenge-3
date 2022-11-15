import { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import ColorSelected from '../context/ColorSelected.context'
import useNeighbours from '../hooks/useNeighbours'

const Pixel = ({ width, id }: { width: number; id: string }): JSX.Element => {
  const { colorSelected } = useContext(ColorSelected)
  const [color, setColor] = useState('#ffffff')
  const pixel = useRef<any>(undefined)
  const { findNeihbours } = useNeighbours()

  const handleClick = () => {
    const tool = 'fill'
    const pixelColor = pixel.current.style.backgroundColor

    if (tool === 'fill') {
      findNeihbours(pixel?.current).forEach(el => {
        el.setAttribute('style', `background-color: ${pixelColor};`)
      })
    }
    // setColor(colorSelected)
  }

  return (
    <Pix
      ref={pixel}
      id={id}
      width={width}
      style={{ backgroundColor: color }}
      selected={colorSelected}
      onClick={handleClick}
    ></Pix>
  )
}
export default Pixel

const Pix = styled.div.attrs(
  ({ background, selected, width }: { background: string; selected: string; width: number }) => ({
    background,
    selected,
    width,
  })
)`
  border: 0.5px solid #000000;
  width: calc(${({ width }) => `550px / ${width}`});
  :hover {
    background-color: ${({ selected }) => selected};
  }
`
