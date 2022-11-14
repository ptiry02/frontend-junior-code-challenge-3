import styled from 'styled-components'
import Row from './Row'

const Canvas = ({ width = 0 }: { width: number }) => {
  const rows: JSX.Element[] = []

  for (let i = 0; i < width; i++) {
    rows.push(<Row key={i} width={width} />)
  }

  return <Wrapper>{rows}</Wrapper>
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
