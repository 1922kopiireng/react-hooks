// import Header from "./components/Header";

// import {useEffect, useState} from "react"
// import { Router, Route, Switch } from "react-router-dom";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import ProductList from "./components/ProductList";

import { useState } from "react"
import ProductList from "./components/ProductList"; //useEffect Hook
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";


function App() {
  const [products, setproducts] =  useState([
    {id:1, title:'Product 1', price:899},
    {id:2, title:'Product 2', price:982},
    {id:3, title:'Product 3', price:322},
    {id:4, title:'Product 4', price:276},
    {id:5, title:'Product 5', price:389}
  ])

  const deleteProduct = (productId) => {
    const newProducts = products.filter(product => product.id !== productId)
    setproducts(newProducts)
  }

  // return(
  //   <BrowserRouter>
  //     <Routes>
  //       <Route exact path="/">
  //           <ProductList products={ products } deleteProduct={ deleteProduct }/>
  //         </Route>
  //         <Route path="/about">
  //           <About/>
  //         </Route>
  //         <Route path="/contact">
  //           <Contact/>
  //         </Route>
  //     </Routes>
  //   </BrowserRouter>
  // )

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
        <Router>
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route path="/add">
              <AddProduct />
            </Route>
            <Route path="/edit/:id">
              <EditProduct />
            </Route>
          </Switch>
        </Router>
        </div>
      </div>
        
  </div>
  )
}

export default App;
