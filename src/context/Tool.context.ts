/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from 'react'
import { Tools } from '../Types/enums'

type ToolContextState = {
  tool: Tools
  setTool: Dispatch<SetStateAction<string>>
}

const ToolSelected = createContext<ToolContextState>({ tool: Tools.pencil, setTool: () => {} })
export default ToolSelected
