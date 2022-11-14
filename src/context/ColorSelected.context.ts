/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from 'react'

type ColorSelectedContextState = {
  colorSelected: undefined | string
  setColorSelected: Dispatch<SetStateAction<undefined | string>>
}

const ColorSelected = createContext<ColorSelectedContextState>({ colorSelected: undefined, setColorSelected: () => {} })
export default ColorSelected
