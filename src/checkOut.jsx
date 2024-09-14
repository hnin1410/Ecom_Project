import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import kpay from '../images/kpay.png'
import wpay from '../images/wave pay.png'
import upload from '../images/upload.webp'
import { useContext } from 'react';
import {Context} from './context.jsx';
import Swal from 'sweetalert2';

function CheckOut(){
    const {cart} =useContext(Context);
    const [payment, setPayment] = useState(false);
    const inputImage = useRef(null)
    const [imageUrl, setImageUrl] = useState();
    // const [total, setTotal] = useState(0);
    var Total = 0;
    const imageContainer =()=>{
        inputImage.current.click()
    }
    const imageHandle =(e)=>{
        setImageUrl(URL.createObjectURL(e.target.files[0]));
        console.log(imageUrl)
    }
    const paymentHandle =(text)=>{
        if(text==="online"){
            setPayment(true)
        }else if( text==="cash"){
            setPayment(false)
        }
    }
    const orderHandle=()=>{
        Swal.fire({
            text: "Thank For Your Shopping",
            icon: "question"
          });
          localStorage.removeItem("cart")
    }
    return( 
        <main className="mt-[7px]">
            <div className="grid grid-cols-2 gap-8">
                <div className='bg-gray-50 ml-[60px] border-r-2'>
                    {cart.map((product)=>{
                        Total += product.price*product.qty;
                        return(
                            <div className='flex flex-row justify-around mt-[20px] items-center '>
                                <img src={product.images[0]} className='w-[100px] h-[100px]'></img>
                                <span>{product.tittle}</span>
                                <span>$ {product.price}</span>
                            </div>
                        )
                    })}
                    <div>Total : ${Total}</div>
                </div>
                <div className='pl-[10px]'>
                    <h2 className='text-left mt-[30px] filter text-xl'>Delivery</h2>
                    <form className='mt-[10px] text-left'>
                        <ul className='grid grid-rows-5 gap-y-[12px]'>
                            <li>
                                <input type="text" placeholder='Name' className='border w-[600px] p-[10px] rounded-md outline-1 outline-red-200'></input>
                            </li>
                            <li>
                                <input type="text" placeholder='Phone Number' className='border w-[600px] p-[10px] rounded-md outline-1 outline-red-200'></input>
                            </li>
                            <li>
                                <input type="text" placeholder='Address' className='border w-[600px] p-[10px] rounded-md outline-1 outline-red-200'></input>
                            </li>
                            <li>
                                <select className='border w-[600px] p-[10px] rounded-md outline-1 outline-red-200'> 
                                    <option value="Option 1">Option 1</option> 
                                    <option value="Option 2">Option 2</option> 
                                    <option value="Option 3">Option 3</option> 
                                </select> 
                            </li>
                            <li>
                                <select className='border w-[600px] p-[10px] rounded-md outline-1 outline-red-200'> 
                                    <option value="Option 1">Option 1</option> 
                                    <option value="Option 2">Option 2</option> 
                                    <option value="Option 3">Option 3</option> 
                                </select> 
                            </li>
                        </ul>
                    </form>
                    <h2 className='text-left mt-[30px] filter text-xl'>Payment</h2>
                    <form className='mt-[10px] text-left'>
                        <ul className='grid grid-rows-2 gap-y-[12px]'>
                            <li>
                                <input type="button" className='border w-[600px] p-[10px] rounded-md outline-1 outline-red-200' onClick={()=>paymentHandle("cash")} value="Cash On Delivery"></input>
                            </li>
                            <li>
                                <input type="button"  className='border w-[600px] p-[10px] rounded-md outline-1 outline-red-200 ' onClick={()=>paymentHandle("online")} value="Prepaid"></input>
                            </li>
                        </ul>
                        <div>
                        {payment && 
                            <div className='mt-[50px]'> 
                                <h2 className='filter text-xl'>Select Your Payment Type</h2>
                                <ul className='mt-[20px]'>
                                    <li className='mb-[10px]'>
                                        <ul className='filter flex flex-row justify-between items-center w-[500px]'>
                                            <li><img src={kpay} className='w-[80px] h-[60px]'></img></li>
                                            <li className='flex flex-col'>
                                                <span>U Kyaw</span>
                                                <span>09123456789</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul className=' filter flex flex-row justify-between items-center w-[500px]'>
                                            <li><img src={wpay} className='w-[80px] h-[60px]'></img></li>
                                            <li className='flex flex-col'>
                                                <span>U Kyaw</span>
                                                <span>09123456789</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <h2 className='filter my-[20px] text-xl'>Upload Your Screenshot</h2>
                                <div onClick={imageContainer} className='ml-[50px]'>
                                    {imageUrl? (<img src={imageUrl} className='w-[500px] h-[250px]'></img>): (<img src={upload} className='w-[500px] h-[250px]'></img>)}
                                    
                                    <input type="file" onChange={imageHandle} ref={inputImage} className='hidden'></input>
                                    
                                </div>
                            </div>
                            }
                        </div>
                        <div>
                             <Link to="/"><button className='border w-[600px] p-[10px] rounded-md outline-1 outline-red-200 mt-[20px] bg-red-100 mb-[50px]' onClick={orderHandle}>Place Order</button></Link>
                        </div>
                    </form>
                    
                </div>
            </div>
        </main>
    )
}

export default CheckOut;