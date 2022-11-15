/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from 'react'

type ColorSelectedContextState = {
  colorSelected: string
  setColorSelected: Dispatch<SetStateAction<string>>
}

const ColorSelected = createContext<ColorSelectedContextState>({ colorSelected: '#ffffff', setColorSelected: () => {} })
export default ColorSelected
