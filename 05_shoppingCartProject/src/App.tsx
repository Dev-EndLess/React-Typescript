import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductionList from "./components/ProductionList";
import { useState } from "react";
import "./index.css";

function App() {
  const [viewCart, setViewCart] = useState(false);

  const pageContent = viewCart ? <Cart /> : <ProductionList />;

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
        {pageContent}
      <Footer viewCart={viewCart} />
    </>
  );

  return content;
}

export default App;
