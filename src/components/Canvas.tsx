import { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import ToolSelected, { ToolContextState } from '../context/Tool.context'
import { CanvasSizes, Tools } from '../Types/enums'
import Row from './Row'

type CanvasProps = {
  width: CanvasSizes
}

const Canvas = forwardRef<HTMLDivElement, CanvasProps>(({ width }, ref) => {
  const rows: JSX.Element[] = []
  const { tool } = useContext<ToolContextState>(ToolSelected)

  for (let i = 0; i < width; i++) {
    rows.push(<Row id={`${i}`} key={i} width={width} />)
  }

  return (
    <Wrapper ref={ref} id='canvas' cursor={tool}>
      {rows}
    </Wrapper>
  )
})

export default Canvas

const Wrapper = styled.div.attrs(({ cursor }: { cursor: Tools }) => ({
  cursor,
}))`
  box-sizing: content-box;
  align-self: center;
  width: 550px;
  height: 550px;
  border: 0.5px solid #000000;
  display: flex;
  flex-direction: column;
  :hover {
    cursor: url(${({ cursor }) => `${cursor}.cur`}), auto;
  }
`
