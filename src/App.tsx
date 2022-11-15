import { useState } from 'react'
import styled from 'styled-components'
import Canvas from './components/Canvas'
import ColorPicker from './components/ColorPicker'
import SizeSelector from './components/SizeSelector'
import ColorSelected from './context/ColorSelected.context'
import SizeSelected from './context/SizeSelected.context'

function App(): JSX.Element {
  const [colorSelected, setColorSelected] = useState<string>('#ffffff')
  const [size, setSize] = useState<number>(8)

  const handleReset = () => {
    setColorSelected('#ffffff')
    setSize(0)
  }

  return (
    <SizeSelected.Provider value={{ size, setSize }}>
      <ColorSelected.Provider value={{ colorSelected, setColorSelected }}>
        <Title>Pixel Art</Title>
        <SizeSelector />
        {size !== 0 && (
          <>
            <ColorPicker />
            <Canvas width={size} />
            <Button onClick={handleReset}>Reset</Button>
          </>
        )}
      </ColorSelected.Provider>
    </SizeSelected.Provider>
  )
}

export default App

const Title = styled.h1`
  align-self: center;
  margin-bottom: 40px;
`
const Button = styled.button<{ children: string }>`
  align-self: center;
  padding: 8px 10px;
  font-size: 1em;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: 20px;
  background-color: ${({ children }) => (children === 'Reset' ? '#ce0808' : 'inherit')};
  color: ${({ children }) => (children === 'Reset' ? '#ffffff' : 'inherit')};
  :hover {
    cursor: pointer;
  }
  :active {
    box-shadow: ${({ children }) =>
      children === 'Reset' ? 'inset 0px 0px 3px 3px #70707090' : 'inset 0px 0px 3px 3px #cccccc'};
  }
`
