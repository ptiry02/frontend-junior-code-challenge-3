import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import SizeSelected from '../context/SizeSelected.context'
import { sizes } from '../helpers/constants'
import { CanvasSizes } from '../Types/enums'

const SizeSelector = (): JSX.Element => {
  const { setSize } = useContext(SizeSelected)

  useEffect(() => {
    document.getElementById('8')?.setAttribute('checked', 'true')
  }, [])

  return (
    <>
      <Wrapper>
        {sizes.map((size: CanvasSizes, i: number) => (
          <Option key={i}>
            <input
              id={size.toString()}
              type='radio'
              value={size}
              name='size'
              onChange={e => setSize(Number(e.target.value))}
            />
            <span>{`${size}x${size}`}</span>
          </Option>
        ))}
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
