import Nav from "./Nav.jsx";
import './App.css'
import { useState, useEffect } from "react";
import { Context } from "./context.jsx";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './home.jsx';
import Jewellery from "./Jewellery.jsx";
import ProductDetail from "./productDetail.jsx";
import Cart from "./cart.jsx";
import Swal from 'sweetalert2';
import Heart from './heart.jsx';
import CheckOut from "./checkOut.jsx";
import Contact from './contactus.jsx'
function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart'))||[]);
  const [heartList , setHeartList] = useState(JSON.parse(localStorage.getItem('wishlist'))||[])
  const [heartId, setheartId] = useState([])
  const [selected , setSelected] = useState(false)
  const handleHeart =(heart, index)=>{
    const wfilter = heartList.find((w)=>{
      return( w.id == heart.id)
    })
    if (wfilter===undefined){  
    heartList.push(heart)
    setheartId(index)
    localStorage.setItem('wishlist', JSON.stringify(heartList))
    } else if(wfilter.id===heart.id){
      Swal.fire({
        text: "Already In WishList",
      });
    }
  } 
  const cartHandle =(value, col , num) => {
    const cfilter = cart.find((c)=>{
      return( c.id == value.id)
    })
    if (!col || !num){
      Swal.fire({
        title: "Choose Quantity and Color",
        text: "OK",
        icon: "question"
      });
    } 
     else if (cfilter===undefined){
      value.color= col
      value.qty= num
      cart.push(value);
      localStorage.setItem('cart', JSON.stringify(cart))
      setTimeout(()=>{window.location.reload()},500)
    }
     else if (cfilter.id == value.id){
        Swal.fire({
          text: "Already In Cart",
        });
     }
    console.log (cfilter)
  }
  const wishlistCart =(W)=>{
    cart.push(W);
    localStorage.setItem('cart', JSON.stringify(cart))
    setTimeout(()=>{window.location.reload()},500)
  }
  return (
      <main>
        <Context.Provider value={{cart,setCart, cartHandle ,heartList, handleHeart , heartId , wishlistCart , selected}}>
            <BrowserRouter>
                <Nav/><br></br><br></br><br></br>
                <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/:productId' element={<ProductDetail/>}></Route>
                  <Route path='jewellery' element={<Jewellery/>}></Route>
                  <Route path='cart' element={<Cart/>}></Route>
                  <Route path='heart' element={<Heart/>}></Route>
                  <Route path='cart/checkOut' element={<CheckOut/>}></Route>
                  <Route path='about' element={<Contact/>}></Route>
                </Routes>
            
            </BrowserRouter>

        </Context.Provider>
      </main>
  )
}

export default App;
