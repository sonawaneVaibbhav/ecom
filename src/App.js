import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop" element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
