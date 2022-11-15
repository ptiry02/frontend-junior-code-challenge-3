import { useRef } from 'react'
import styled from 'styled-components'
import Row from './Row'

const Canvas = ({ width = 0 }: { width: number }) => {
  //   const canvas = useRef<any>(undefined)

  const rows: JSX.Element[] = []

  for (let i = 0; i < width; i++) {
    rows.push(<Row id={`r${i}`} key={i} width={width} />)
  }

  return <Wrapper /* ref={canvas} */>{rows}</Wrapper>
}

export default Canvas

const Wrapper = styled.div`
  align-self: center;
  width: 550px;
  height: 550px;
  border: 0.5px solid #000000;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  :hover {
    cursor: url('pencil.cur'), auto;
  }
`
