export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};


// index.js
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// import { Routes, Route } from "react-router-dom";
// import Home from "path/to/pages/Home";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";

// export const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </div>
//   );
// };

// import { Routes, Route } from "react-router-dom";
// import Home from "path/to/pages/Home";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";
// import NotFound from "path/to/pages/NotFound";

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };
