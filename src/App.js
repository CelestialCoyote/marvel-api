import GlobalStyles from './components/styles/Global';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {

    return (
        <div className="App">
            <GlobalStyles />
            <Header title={"Marvel Api"} />
            <div className="page">
                Hello
            </div>
            <Footer copyright={"CelestialCoyote 2022"} />
        </div>
    );
}


export default App;
