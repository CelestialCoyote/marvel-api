import GlobalStyles from './components/styles/Global';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchCharacters from './pages/SearchCharacters/SearchCharacters';


const App = () => {

    return (
        <div className="App">
            <GlobalStyles />
            <Header title={"Marvel API"} />
            <SearchCharacters />
            <Footer copyright={"CelestialCoyote 2022"} />
        </div>
    );
}


export default App;
