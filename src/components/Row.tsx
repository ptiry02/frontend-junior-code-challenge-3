import styled from 'styled-components'
import Pixel from './Pixel'

const Row = ({ width, id }: { width: number; id: string }) => {
  const pixels: JSX.Element[] = []

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel id={`${id}p${i}`} width={width} key={i} />)
  }

  return (
    <Wrapper id={id} width={width}>
      {pixels}
    </Wrapper>
  )
}

export default Row

const Wrapper = styled.div<{ width: number }>`
  display: flex;
  align-self: center;
  width: 100%;
  height: calc(${({ width }) => `550px / ${width}`});
`
