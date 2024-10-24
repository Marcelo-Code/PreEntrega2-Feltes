import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import "./App.css";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route
            path={"/category/:categoryName"}
            element={<ItemListContainer />}
          />
          {/* <Route path={"/cart"} element={<CartContainer />} /> */}
          <Route
            path={"/productDetail/:id"}
            element={<ItemDetailContainer />}
          />
          <Route path={"*"} element={<h1>not found</h1>} />
          <Route />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
