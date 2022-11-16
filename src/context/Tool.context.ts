/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from 'react'
import { Tools } from '../Types/enums'

export type ToolContextState = {
  tool: Tools
  setTool: Dispatch<SetStateAction<Tools>>
}

const ToolSelected = createContext<ToolContextState>({ tool: Tools.pencil, setTool: () => {} })
export default ToolSelected
