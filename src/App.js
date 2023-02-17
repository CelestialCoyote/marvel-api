import Header from './components_old/Header/Header';
import Footer from './components_old/Footer/Footer';
import SearchCharacters from './pages/SearchCharacters/SearchCharacters';


const App = () => {

    return (
        <div className="app">
            <Header title={"Marvel API"} />
            <SearchCharacters />
            <Footer copyright={"CelestialCoyote 2022"} />
        </div>
    );
};


export default App;
