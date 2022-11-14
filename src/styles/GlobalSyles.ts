import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    #root {
        display: flex;
        flex-direction: column;
    }
`
export default GlobalStyles
