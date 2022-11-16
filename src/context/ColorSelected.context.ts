/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from 'react'
import { Colors } from '../Types/enums'

type ColorSelectedContextState = {
  colorSelected: Colors
  setColorSelected: Dispatch<SetStateAction<Colors>>
}

const ColorSelected = createContext<ColorSelectedContextState>({
  colorSelected: Colors.White,
  setColorSelected: () => {},
})
export default ColorSelected
