import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "pages/Shop/Shop";
import HomePlaceholder from "pages/HomePlaceholder/HomePlaceHolder";
import ShoppingCart from "pages/ShoppingCart/ShoppingCart";
import NotFound from "pages/NotFound/NotFound";
import History from "pages/History/History";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomePlaceholder />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="history" element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
