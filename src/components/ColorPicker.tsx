import styled from 'styled-components'
import { colors } from '../helpers/constants'

const ColorPicker = (): JSX.Element => {
  return (
    <Wrapper>
      {colors.map((c, i) => (
        <Option key={i} style={{ backgroundColor: c }}></Option>
      ))}
    </Wrapper>
  )
}

export default ColorPicker

const Wrapper = styled.div`
  display: flex;
  column-gap: 5px;
  align-self: center;
`
const Option = styled.div`
  border: 1px solid #000000;
  width: 40px;
  height: 40px;
`
