import { useContext, useState } from 'react'
import styled from 'styled-components'
import ColorSelected from '../context/ColorSelected.context'

const Pixel = ({ width }: { width: number }): JSX.Element => {
  const { colorSelected } = useContext(ColorSelected)
  const [color, setColor] = useState(colorSelected)

  return <Pix width={width} background={color} selected={colorSelected} onClick={() => setColor(colorSelected)}></Pix>
}
export default Pixel

const Pix = styled.div.attrs(({ background, selected }: { background: string; selected: string }) => ({
  background,
  selected,
}))<{ width: number }>`
  border: 0.5px solid #000000;
  background-color: ${({ background }) => background};
  width: calc(${({ width }) => `550px / ${width}`});
  :hover {
    background-color: ${({ selected }) => selected};
  }
`
