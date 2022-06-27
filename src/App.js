import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'


const theme = {
    colors: {
        header: '#ebfbff',
        body: '#777',
        footer: '#003333',
    },
    mobile: '768px',
};


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                Marvel Api
            </>
        </ThemeProvider>
    );
}


export default App;
