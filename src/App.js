import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "pages/Shop/Shop";
import HomePlaceholder from "pages/HomePlaceholder/HomePlaceHolder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomePlaceholder />} />
          <Route index path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
