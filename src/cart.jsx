import { useContext, useState , useEffect, useReducer} from "react";
import {Link} from "react-router-dom"
import {Context} from "./context.jsx";
import Data from "./data.jsx"
import { FaRegTrashCan } from "react-icons/fa6";


function Cart (){
    var Total = 0;
    var quantity = 0;
    const {cart ,setCart} =useContext(Context);
    const [totalQty, settotalQty] = useState(0)
    const [qtystatus, setqtystatus] = useState(0)
    const [qtycheck, setqtycheck] = useState(false)

    const qtyHandle =(type, index)=>{
            setqtystatus(index)
            if(type==="minus"){
                settotalQty(totalQty-1)        
            }else if(type==="plus"){
                settotalQty(totalQty+1)
            }
    }
    const deleteItem =(index)=>{
            const cartList = cart.filter((list)=>{
                return( list.id !== index)
            })
        localStorage.setItem('cart', JSON.stringify(cartList))
        setTimeout(()=>{window.location.reload()},500)
    }
    return(
        <main className="ml-[100px] mr-[100px] mt-[20px]" >
            <div className="grid grid-cols-3">
                {cart.map ((carrt,i)=>{
                    if(qtystatus===i){
                        quantity = carrt.qty + totalQty;
                        console.log("bla")
                    }else{
                        quantity = carrt.qty
                    }
                    
                    Total += carrt.price*quantity;
                    return(
                        <div className="flex flex-row justify-start mt-[10px]">
                            <img src={carrt.images[0]} className="w-[150px] h-[170px]"/>
                            <div className="ml-[10px]">
                                <div>{carrt.tittle}</div>
                                <div className="mt-[10px] flex flex-row self-center">Price:  {carrt.price}</div>
                                <div className="mt-[10px] flex flex-row self-center">
                                    Color: 
                                    <span className="w-[20px] h-[20px] inline-block rounded-full ml-[10px]" style={{backgroundColor:carrt.color}}></span>
                                </div>
                                <div className="mt-[10px] flex flex-row self-center">Quantity:
                                    <span className="ml-[10px] w-[25px] bg-red-100" onClick={()=>qtyHandle('minus', i)}>-</span>
                                    <span className="ml-[10px] mr-[10px]">{quantity}</span>
                                    <span className="w-[25px] bg-red-100" onClick={()=>qtyHandle('plus', i)}>+</span>
                                </div>
                                <span className="bg-red-200 w-[30px] h-[30px]"onClick={()=>{deleteItem(carrt.id)}}><FaRegTrashCan className="mt-[15px] "/></span>
                            </div>
                            
                        </div>
                        

                    )
                })}
            </div>
            <div className="absolute top-[500px] right-[200px] text-xl font-medium">Grand Total :  ${Total}</div>
            <button className="filter font-medium inline-block text-center absolute top-[450px] right-[200px] px-[50px] py-[9px] mt-[100px] bg-red-100"><Link to='checkOut'>Check Out</Link></button>
        </main>
    )
}

export default Cart;