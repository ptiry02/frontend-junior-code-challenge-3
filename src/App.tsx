import { useState } from 'react'
import styled from 'styled-components'
import ColorPicker from './components/ColorPicker'
import ColorSelected from './context/ColorSelected.context'

function App(): JSX.Element {
  const [colorSelected, setColorSelected] = useState<undefined | string>('#ffffff')
  return (
    <ColorSelected.Provider value={{ colorSelected, setColorSelected }}>
      <Title>Pixel Art</Title>
      <ColorPicker />
    </ColorSelected.Provider>
  )
}

export default App

const Title = styled.h1`
  align-self: center;
  margin-bottom: 40px;
`
