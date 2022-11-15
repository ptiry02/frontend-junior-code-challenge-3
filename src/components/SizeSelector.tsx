import { useContext } from 'react'
import styled from 'styled-components'
import SizeSelected from '../context/SizeSelected.context'

const SizeSelector = (): JSX.Element => {
  const { setSize } = useContext(SizeSelected)

  return (
    <>
      <Wrapper>
        <Option>
          <input type='radio' value={8} name='size' defaultChecked onChange={e => setSize(Number(e.target.value))} />
          8x8
        </Option>
        <Option>
          <input type='radio' value={12} name='size' onChange={e => setSize(Number(e.target.value))} />
          12x12
        </Option>
        <Option>
          <input type='radio' value={16} name='size' onChange={e => setSize(Number(e.target.value))} />
          16x16
        </Option>
        <Option>
          <input type='radio' value={32} name='size' onChange={e => setSize(Number(e.target.value))} />
          32x32
        </Option>
      </Wrapper>
    </>
  )
}

export default SizeSelector

const Wrapper = styled.div`
  align-self: center;
  display: flex;
  column-gap: 30px;
`
const Option = styled.label`
  display: flex;
  align-items: center;
  column-gap: 5px;
`
const Button = styled.button`
  align-self: center;
  padding: 8px 10px;
  font-size: 1em;
  border: 1px solid black;
  border-radius: 20px;
  margin-top: 20px;
  :hover {
    cursor: pointer;
  }
  :active {
    box-shadow: inset 0px 0px 3px 3px #cccccc;
  }
`
