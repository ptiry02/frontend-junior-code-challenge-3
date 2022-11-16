import { useRef, useState } from 'react'
import styled from 'styled-components'
import Canvas from './components/Canvas'
import ColorPicker from './components/ColorPicker'
import SizeSelector from './components/SizeSelector'
import ColorSelected from './context/ColorSelected.context'
import SizeSelected from './context/SizeSelected.context'
import ToolSelected from './context/Tool.context'
import { CanvasSizes, Colors, Tools } from './Types/enums'
import DownloadModal from './components/DownloadModal'
import { createPortal } from 'react-dom'

function App(): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [colorSelected, setColorSelected] = useState<Colors>(Colors.White)
  const [size, setSize] = useState<CanvasSizes>(CanvasSizes.S)
  const [tool, setTool] = useState<Tools>(Tools.pencil)
  const canvas = useRef<any>(null)

  return (
    <ToolSelected.Provider value={{ tool, setTool }}>
      <SizeSelected.Provider value={{ size, setSize }}>
        <ColorSelected.Provider value={{ colorSelected, setColorSelected }}>
          <Title>Pixel Art</Title>
          <SizeSelector />
          {tool === 'pencil' && <ColorPicker />}
          <ToolOptions>
            <Button onClick={() => setTool(Tools.pencil)}>
              <img src='pencil.cur' alt='pencil' />
            </Button>
            <Button onClick={() => setTool(Tools.bucket)}>
              <Img src='bucket.cur' alt='bucket' />
            </Button>
          </ToolOptions>
          <Canvas ref={canvas} width={size} />
          <Button onClick={() => setShowModal(true)}>Download</Button>
          {showModal &&
            createPortal(<DownloadModal canvas={canvas} isVisible={setShowModal} />, document.getElementById('modal')!)}
        </ColorSelected.Provider>
      </SizeSelected.Provider>
    </ToolSelected.Provider>
  )
}

export default App

const Title = styled.h1`
  align-self: center;
  margin: 40px 0;
`
const ToolOptions = styled.div`
  display: flex;
  align-self: center;
  column-gap: 30px;
  margin-bottom: 20px;
`
const Img = styled.img`
  margin: 15px 0 0 15px;
  width: 35px;
`
const Button = styled.button`
  align-self: center;
  padding: 8px 10px;
  font-size: 1em;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: 20px;
  color: ${({ children }) => (children === 'Reset' ? '#ffffff' : 'inherit')};
  :hover {
    cursor: pointer;
  }
  :active {
    box-shadow: ${({ children }) =>
      children === 'Reset' ? 'inset 0px 0px 3px 3px #70707090' : 'inset 0px 0px 3px 3px #cccccc'};
  }
`
