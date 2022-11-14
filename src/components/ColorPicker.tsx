import { useContext } from 'react'
import styled from 'styled-components'
import ColorSelected from '../context/ColorSelected.context'
import { colors } from '../helpers/constants'
import { BsCheckLg } from 'react-icons/bs'

const ColorPicker = (): JSX.Element => {
  const { colorSelected, setColorSelected } = useContext(ColorSelected)

  return (
    <Wrapper>
      {colors.map((c, i) => (
        <Option key={i} style={{ backgroundColor: c }} onClick={() => setColorSelected(c)}>
          {colorSelected === c && (
            <Selected>
              <BsCheckLg color='white' />
            </Selected>
          )}
        </Option>
      ))}
    </Wrapper>
  )
}

export default ColorPicker

const Wrapper = styled.div`
  display: flex;
  align-self: center;
`
const Option = styled.div`
  border: 1px solid #000000;
  width: 40px;
  height: 40px;
  margin: 2.5px;
  :hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`
const Selected = styled.div`
  height: 100%;
  width: 100%;
  background-color: #0000005c;
  display: flex;
  align-items: center;
  justify-content: center;
`
