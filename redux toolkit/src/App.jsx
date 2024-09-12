// import React, { useEffect } from "react";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import store from "../store/store";
// import ProductListing from "./components/ProductListing";
// import Cart from "./components/Cart";

// function App() {
//   useEffect(() => {
//     store.subscribe(() => {
//       localStorage.setItem("cart", JSON.stringify(store.getState().cart));
//     });
//   }, []);

//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="App">
//           <h1>Shopping Cart</h1>
//           <Routes>
//             <Route path="/" element={<ProductListing />} />
//             <Route path="/cart" element={<Cart />} />

//             {/* Catch-all route for 404 */}
//           </Routes>
//         </div>
//       </Router>
//     </Provider>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store/store"; // استيراد المتجر من Toolkit
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import Cart from "./components/Cart";

function App() {
  useEffect(() => {
    store.subscribe(() => {
      localStorage.setItem("cart", JSON.stringify(store.getState().cart.items)); // حفظ حالة العربة
    });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <button className=" bg-black text-center  text-yellow-50">
            <Link to="/cart">
              <h1>Shopping Cart</h1>
            </Link>
          </button>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
