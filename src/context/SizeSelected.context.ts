/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from 'react'
import { CanvasSizes } from '../Types/enums'

type SizeSelectorContextState = {
  size: CanvasSizes
  setSize: Dispatch<SetStateAction<number>>
}

const SizeSelected = createContext<SizeSelectorContextState>({ size: CanvasSizes.S, setSize: () => {} })
export default SizeSelected
