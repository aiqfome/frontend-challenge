import styled, {createGlobalStyle} from 'styled-components';
import variables from './variables';


export const GlobalStyle = createGlobalStyle`
	html,
	body {
		height: 100vh;
	}
	body {
        margin: 0;
        font-family: 'star jedi', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${variables.yellow};
	}
`

