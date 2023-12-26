import './App.css';
import Banner from "./components/homePage/banner/Banner";
import Header from "./components/homePage/header/Header";
import SlideBrand from "./components/homePage/slide_brand/SlideBrand";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Banner></Banner>
            <SlideBrand></SlideBrand>
        </div>
    );
}

export default App;
