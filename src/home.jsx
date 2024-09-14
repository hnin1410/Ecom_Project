import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext, useState,useEffect} from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperNavButton from './swipernav.jsx';
import ban1 from '../images/banner1.webp';
import ban2 from '../images/banner2.webp';
import ban22 from '../images/banner22.webp';
import ban11 from '../images/banner11.webp';
import first from '../images/first.webp';
import second from '../images/second.webp';
import third from '../images/third.webp';
import './App.css';
import Star from './star.jsx'
import Data from './data.jsx';
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import brandLogo1 from '../images/Brand Logo 1.avif';
import brandLogo2 from '../images/Brand Logo 2.webp';
import brandLogo3 from '../images/Brand Logo 3.webp';
import brandLogo4 from '../images/Brand Logo 4.webp';
import brandLogo5 from '../images/Brand Logo 5.avif';
import brandLogo6 from '../images/Brand Logo 6.avif';
import brandLogo7 from '../images/Brand Logo 7.webp';
import Footer from './footer.jsx';
import ScrollTopButton from './topscrollbutton.jsx';
import {Link} from 'react-router-dom';
import { Context } from './context.jsx';
 
function Home(){
    const {handleHeart , heartId} = useContext(Context)
    const [isclick,setIsclick]=useState();
    const [result,setresult] =useState([]);
    const [changeImage, setchangeImage] = useState(0);
    const [currentimage,setcurrentimage] =useState(0);
    const [sec,setSec] = useState(60);
    const [min,setMin] = useState(60);
    const [hr,setHR] = useState(24);

    useEffect(()=>{
        setTimeout(()=>{handleClick("arrival")},500)
    },[])
    useEffect(()=>{
       const tt=  setInterval(timer,1000);
       return () => clearInterval(tt);
    })
    const timer =() =>{
        setSec(sec-1)
        if (sec===0){
            setSec(60)
            setMin(min-1)
            
        }
        if (min===0) {
            setMin(60)
            setHR(hr-1)
            
        } 
    }
    const handleClick=(bla)=>{
        const searchProduct= Data.filter((cat)=>{
            return( cat.category===bla )
        })
        setresult(searchProduct)
        setIsclick(bla)
         }
    const changeImageHandle=(num,current)=>{
        setchangeImage(num)
        setcurrentimage(current)
        setispress(true)
    }
    return(
        <main className='mt-[10px]'>
            <Swiper
                  spaceBetween={0}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 3500,

                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className='-z-10'
            >
                <SwiperSlide className='relative'>
                    <picture>
                        <source media='(max-width: 768px)' srcSet={ban11} />
                        <img src={ban1} className='banner2'></img>
                    </picture>
                    <div className='absolute top-[160px] right-[80px] w-[600px] h-[700px] textResponsive'>
                        <span className='text span1'>Perfect Special Jewellery</span>
                        <span className='text span2'>Bridal Bangles Collection</span>
                        <button className='text top-[170px] left-[2px] bg-red-100 p-[10px] w-[130px] butResponsive'>Shop Now</button>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <picture>
                        <source media='(max-width: 768px)' srcSet={ban22} />
                        <img src={ban2} className='banner2'></img>
                    </picture>
                    <div className='absolute top-[160px] left-[80px] w-[600px] h-[700px] textResponsive'>
                        <span className='text span1'> Jewellery Tell A Story</span>
                        <span className='text span2'>Classic Jewellery Collection</span>
                        <button className='text top-[170px] left-[2px] bg-red-100 p-[10px] w-[130px] butResponsive'>Shop Now</button>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='mt-[30px] mb-[30px]'>
                <div className='grid grid-cols-3 gap-8 relative flex justify-between max-[768px]:grid-cols-1'>
                    <a className='control-img'><img src={first} className='test hover:w-[10px]'></img></a>
                    <a className='control-img'><img src={second} className='test'></img></a>
                    <a className='control-img'><img src={third} className='test'></img></a>
                </div>
            </div>
            <div>
                <h2 className='trend-title'>TRENDING PRODUCT</h2>
                <span className='sub-title tracking-wide'>One Girl’s Journey To Making Her Fashion Dreams Come True In Elements Jewellers</span>
                <div className='flex flex-row justify-center mt-[20px]'>
                <button className={isclick==="arrival"? 'catcolor2':'catcolor1'} onClick={()=>handleClick("arrival")}>NEW ARRIVAL</button>
                    <button className={isclick==="top"? 'catcolor2 ml-[40px] mr-[40px]':'catcolor1 ml-[40px] mr-[40px]'} onClick={()=>handleClick("top")}>TOP SELLING</button>
                    <button className={isclick==="feature"? 'catcolor2':'catcolor1'} onClick={()=>handleClick("feature")}>FEATURED</button>
                </div>
                <div className='grid grid-cols-4 gap-8 flex ml-[80px] mr-[80px] mt-[20px] filterContainer'>
                    {result.map((searchcat,i)=>{
                        return(
                            
                                <div className='relative flex flex-col overflow-visible handle'>
                                    <Link to={`/${searchcat.id}`} className='ml-0'>
                                        <img src={searchcat.images[0]} className="home-product1"></img>
                                        <img src={searchcat.images[1]} className="home-product2"></img>
                                    </Link>
                                    <Star rate={searchcat.rating} className="ml-[200px] max-[768px]:ml-[10px]"></Star>
                                    <div className='absolute top-[290px] ml-[50px] flex flex-col text-center max-[768px]:top-[180px] max-[768px]:ml-0'>
                                        <span className='text-base font-normal'>{searchcat.tittle}</span>
                                        <span className='text-base font-normal mt-[8px]'>{searchcat.price}</span>
                                    </div>
                                    <button className='cart ml-[60px] max-[768px]:ml-0'>Product Detail</button>
                                    <div className='absolute flex flex-col right-[-44px] top-[10px] block max-[768px]:right-[3px]'>
                                        <span className='view mb-[10px] rounded-full p-[9px] bg-red-100 w-[36px] height-[36px] opacity-0 max-[768px]:opacity-100 max-[768px]:bg-color-300'><FiShoppingCart/></span>
                                        <span className={heartId===i? 'bg-red-400 heart w-[36px] height-[36px] rounded-full p-[9px] opacity-0 max-[768px]:opacity-100 max-[768px]:bg-color-300':'heart w-[36px] height-[36px] rounded-full p-[9px] bg-red-100 opacity-0 max-[768px]:opacity-100 max-[768px]:bg-color-300'} onClick={()=>{handleHeart(searchcat,i)}}><FiHeart/></span>
                                    </div>
                                </div>
                        
                        )
                    })}
                    <button className='mt-[330px] ml-[550px] w-[100px] bg-red-100 p-[10px] max-[768px]:opacity-0 max-[768px]:mt-[200px]'>View ALL</button>
                </div>
            </div>
            <div className='grid grid-cols-4 ml-[80px] mr-[80px] mt-[50px]  border-gray-200 max-[768px]:grid-cols-1 max-[768px]:ml-[10px] max-[768px]:mr-[10px]'>
                <div className='flex flex-col items-center border p-[30px] border-gray-200'>
                    <span className='w-[70px] height-[70px] rounded-full p-[20px] bg-red-100 text-2xl mb-[8px] max-[768px]:w-[80px] max-[768px]:h-[80px] max-[768px]:text-4xl'><FiShoppingCart/></span>
                    <h3 className='mb-[8px]'>Fast Delivery</h3>
                    <span className='text-slate-500'>Free For All Type Order</span>
                </div>
                <div className='flex flex-col items-center border p-[30px] border-gray-200'>
                    <span className='w-[70px] height-[70px] rounded-full p-[20px] bg-red-100 text-2xl mb-[8px] max-[768px]:w-[80px] max-[768px]:h-[80px] max-[768px]:text-4xl'><FiShoppingCart/></span>
                    <h3 className='mb-[8px]'>Fast Delivery</h3>
                    <span className='text-slate-500'>Free For All Type Order</span>
                </div>
                <div className='flex flex-col items-center border p-[30px] border-gray-200'>
                    <span className='w-[70px] height-[70px] rounded-full p-[20px] bg-red-100 text-2xl mb-[8px] max-[768px]:w-[80px] max-[768px]:h-[80px] max-[768px]:text-4xl'><FiShoppingCart/></span>
                    <h3 className='mb-[8px]'>Fast Delivery</h3>
                    <span className='text-slate-500'>Free For All Type Order</span>
                </div>
                <div className='flex flex-col items-center border p-[30px] border-gray-200'>
                    <span className='w-[70px] height-[70px] rounded-full p-[20px] bg-red-100 text-2xl mb-[8px] max-[768px]:w-[80px] max-[768px]:h-[80px] max-[768px]:text-4xl'><FiShoppingCart/></span>
                    <h3 className='mb-[8px]'>Fast Delivery</h3>
                    <span className='text-slate-500'>Free For All Type Order</span>
                </div>

            </div>
            <div className='mt-[50px]'>
                <h1 className='text-2xl font-medium tracking-wide'>DEAL OF THE DAY</h1>
                <Swiper
                    spaceBetween={12}
                    slidesPerView={3}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='mt-[15px] ml-[70px] mr-[70px] '
                >
                    
                    {Data.map((card,blah)=>{

                        return(
                            <SwiperSlide key={blah}>
                                <div className='flex flex-row'>
                                    <div className='inline-block'><img src={blah=== currentimage? (card.images[changeImage]) :(card.images[0])} className='w-[280px] h-[280px] mr-[13px]'/></div>
                                    <div className='grid grid-rows-3 inline-block'>
                                        <img src={card.images[1]} onClick={()=>{changeImageHandle(1,blah)}} className='w-[90px] h[90px]'/>
                                        <img src={card.images[0]} onClick={()=>{changeImageHandle(0,blah)}} className='w-[90px] h[90px]'/>
                                        <img src={card.images[1]} onClick={()=>{changeImageHandle(1,blah)}} className='w-[90px] h[90px]'/>
                                    </div>
                                </div>
                                <div className='flex flex-col mt-[8px] mb-[8px]'>
                                    <span className='text-lg font-normal '>{card.tittle}</span>
                                    <span className='text-sm mt-[5px]'>{card.price}</span>
                                </div>
                                <div className='flex flex-row justify-between'>
                                        <div className='flex flex-col'>
                                            <span className='px-[30px] py-[10px] border border-gray-200 ml-[25px]'>{hr}</span>
                                            <span className='ml-[20px]'>Hour</span>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='px-[30px] py-[10px] border border-gray-200'>{min}</span>
                                            <span>Minutes</span>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className='px-[30px] py-[10px] border border-gray-200 mr-[30px]'>{sec}</span>
                                            <span className='mr-[25px]'>Sec</span>
                                        </div>
                                    </div>
                            </SwiperSlide>
                            
                        )
                    })}
                    <SwiperNavButton/>
                </Swiper>
                <Swiper
                    slidesPerView={6}
                    loop={true}
                    autoplay={{
                        delay: 2500,
    
                      }}
                    modules={[Autoplay]}
                    className='ml-[80px] mr-[30px]'
                >
                    <SwiperSlide><img src={brandLogo1}></img></SwiperSlide>
                    <SwiperSlide><img src={brandLogo2}></img></SwiperSlide>
                    <SwiperSlide><img src={brandLogo3}></img></SwiperSlide>
                    <SwiperSlide><img src={brandLogo4}></img></SwiperSlide>
                    <SwiperSlide><img src={brandLogo5}></img></SwiperSlide>
                    <SwiperSlide><img src={brandLogo6}></img></SwiperSlide>
                    <SwiperSlide><img src={brandLogo7}></img></SwiperSlide>
                </Swiper>
            </div>
            <Footer/>
            <ScrollTopButton/>

        </main>
    )
}

export default Home;