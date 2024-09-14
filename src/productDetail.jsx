import { Link, useParams } from "react-router-dom";
import Magnifier from "react-magnifier";
import Data from "./data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useContext, useState , useReducer} from "react";
import {Context} from "./context.jsx";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './App.css';

const intitalValue = {
    count:0 ,
    color: "",
}

function reducer (state, action) {
    if (action.type ==="plus"){
        return {...state, count: state.count+ 1}
    } else if ( action.type ==="minus"){
    return { ...state, count: state.count - 1}
    } else if ( action.type ==="select"){
        return {...state, color : state.color=action.payload}
    }
}
function ProductDetail (){
    const {cartHandle} = useContext(Context);
    const [state, dispatch] = useReducer(reducer, intitalValue)
    const {productId} = useParams();
    const [num , setNum] = useState(0);
    const detail = Data.find((pdetail)=>   pdetail.id ==  productId )
    const changeImageHandle=(index)=>{
        setNum(index)
    }
    return (
        <main className="mt-[10px]">
            <div className="grid grid-cols-2 gap-6 ml-[60px] mr-[130px] mt-[30px]">
                <div className="text-right">
                    <Magnifier src={detail.images[num]} width={500}/>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{
                        delay: 3500,
    
                        }}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="z-20 ml-[65px]"
                    >
                        {detail.images.map((i, index)=>{
                            return(
                            
                            <SwiperSlide><img src={i}  className="" onClick={()=> {changeImageHandle(index)}}/></SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="text-left">
                    <div className="text-left ml-[20px] mt-[25px] mb-[40px] filter">
                        <span><Link to="/">Home / </Link></span>
                        <span><Link to="/jewellery">Jewellery</Link></span>
                    </div>
                    <span className="ml-[20px] mb-[30px] text-xl font-medium">{detail.tittle}</span>
                    <span className="ml-[20px] mt-[15px] block filter">Price: {detail.price}</span>
                    <div className="ml-[20px] mt-[25px] filter justify-self-center">
                        Choose Size:
                        <span className="size">S</span>
                        <span className="size">M</span>
                        <span className="size">L</span>
                        <span className="size">XL</span>
                    </div>
                    <div className="ml-[20px] mt-[25px] filter">
                        Quantity:
                        <span onClick={()=>{dispatch({type: "minus"})}} className="w-[30px] text-center inline-block bg-red-100 ml-[20px] mr-[20px]">-</span>
                        <span>{state.count}</span>
                        <span onClick={()=>{dispatch({type: "plus"})}} className="w-[30px] text-center inline-block bg-red-100 ml-[20px]">+</span>
                    </div>
                    <div className="ml-[20px] mt-[25px] filter flex flex-row self-center">
                        Color: 
                        {detail.color.map((color)=>{
                            return(
                                <span onClick={()=>{dispatch({type: "select" , payload: color})}}  className="w-[20px] h-[20px] inline-block rounded-full ml-[20px]" style={{backgroundColor:color}}></span>
                            )
                        })}
                    </div>
                    <button onClick={()=>{cartHandle(detail, state.color , state.count)}} className="inline-block text-center relative left-[20px] px-[90px] py-[9px] mt-[100px] bg-red-300">Add To Cart</button>
                    <button className="inline-block text-center relative left-[20px] ml-[10px] px-[90px] py-[9px] mt-[100px] bg-red-300">Buy Its Now </button>
                </div>
                
            </div>
           
        </main>
    )
}

export default ProductDetail;