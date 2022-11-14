import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        padding-top: 30px;
    }
    #root {
        display: flex;
        flex-direction: column;
    }
`
export default GlobalStyles
