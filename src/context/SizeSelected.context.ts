/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from 'react'

type SizeSelectorContextState = {
  size: number
  setSize: Dispatch<SetStateAction<number>>
}

const SizeSelected = createContext<SizeSelectorContextState>({ size: 0, setSize: () => {} })
export default SizeSelected
