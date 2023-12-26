import './App.css';
import Banner from "./components/homePage/banner/Banner";
import Header from "./components/homePage/header/Header";
import SlideBrand from "./components/homePage/slide_brand/SlideBrand";
import TopSales from "./components/homePage/top_saler/TopSales";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Banner></Banner>
            <SlideBrand></SlideBrand>
            <TopSales></TopSales>
        </div>
    );
}

export default App;
