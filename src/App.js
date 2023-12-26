import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/homePage/HomePage";
import ProductComponent from "./components/all_product/ProductComponent";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<HomePage/>}></Route>
                <Route path={'/products/:brandName'} element={<ProductComponent/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
