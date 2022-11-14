import styled from 'styled-components'
import ColorPicker from './components/ColorPicker'

function App(): JSX.Element {
  return (
    <>
      <Title>Pixel Art</Title>
      <ColorPicker />
    </>
  )
}

export default App

const Title = styled.h1`
  align-self: center;
  margin-bottom: 40px;
`
