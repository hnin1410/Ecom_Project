import React, { useEffect, useState , useRef} from 'react';
import {Link} from 'react-router-dom';
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import logo from '../images/logo.jpeg'
import './App.css';
import { useContext } from 'react';
import {Context} from './context.jsx'
import Data from './data.jsx';
const  Nav =()=>{
    let searchbox = useRef();
    const { cart , heartList} = useContext(Context);
    const [searchData, setsearchData] = useState();
    const [filter, setfilter] = useState();
    const [searchBaron, setsearchBaron]=useState(true);
    // const displaySearch =()=>{
    //     setsearchBaron(!searchBaron)
    // }
    useEffect(()=>{
        const displayHandle =(e)=>{
            if(!searchbox.current.contains(e.target)){
                setsearchBaron(true)
            }

        }
        document.addEventListener("mousedown", displayHandle)
    },[])
    const searchHandle =(event)=>{
        setsearchData(event.target.value);
        const display = Data.filter((product)=>{
            return (product.tittle.toLowerCase().includes(searchData));
        })
        setfilter(display)
        console.log(filter)
    }
    return(
        <main className='z-[100] flex flex-row fixed top-0 justify-between border-b-2 border-gray-200 items-center nav'>
            <img src={logo} className='h-[80px] w-[100px] ml-[70px]'/>
            <nav>
                <ul className='flex flex-row'>
                    <li className='mr-[20px] list'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='mr-[20px] list'>
                        <Link to="jewellery">Jewellery</Link>
                    </li>
                    <li className='mr-[20px] list'>
                        <Link to="accessories">Accessories</Link>
                    </li>
                    <li className='mr-[20px] list'>
                        <Link to="collection">Collection</Link>
                    </li>
                    <li className='mr-[20px] list'>
                        <Link to="about">Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <nav className='flex flex-row mr-[80px]'>
                 <span className='mr-[20px] text-3xl' onClick={()=>{setsearchBaron(!searchBaron)}}>
                    <IoSearch />
                </span>
                <Link to='heart' className='mr-[20px] text-3xl'>
                    <span><FiHeart/></span>
                    <span className='absolute text-sm top-[14px] w-[20px] h-[20px] rounded-full bg-red-100'>{heartList.length}</span>
                </Link>
                <span className='mr-[20px] text-3xl'>
                    <Link to="cart">
                        <FiShoppingCart/>
                        <span className='absolute text-sm top-[14px] w-[20px] h-[20px] rounded-full bg-red-100'>{cart.length}</span>
                    </Link>
                </span>
            </nav>
            {/* {searchBaron&& */}
                <nav className={searchBaron? 'absolute top-[60px] right-[210px] notShow':'absolute top-[60px] right-[210px] show' } ref={searchbox}>
                    <input type='text' value={searchData} onChange={(e)=>searchHandle(e)} className="border outline-0 p-[50px] py-[7px] text-center" placeholder='Product Name'></input>
                    <div className='bg-white'>
                        {filter?.map((goods,i)=>{
                                return(
                                    <Link to={`/${goods.id}`}>
                                        <div key={goods.id} className=' flex flex-row items-center mb-[15px]'>
                                            <img src={goods.images[0]} className='w-[80px]'/>
                                            <div className='flex flex-col'>
                                                <span>{goods.tittle}</span>
                                                <span>$ {goods.price}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                
             
               </nav> 

            {/* } */}
            
            
        </main>
    )
}

export default Nav