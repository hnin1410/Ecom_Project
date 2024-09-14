import { useSwiper} from 'swiper/react';
const SwiperNavButton =()=> {
    const swiper= useSwiper();
    return(
        <div className='mt-[30px] mb-[50px]'> 
            <button className='px-[7px] py-[6px] bg-red-100 mr-[10px]' onClick={()=>{swiper.slidePrev()}}>Prev</button>
            <button className='px-[7px] py-[6px] bg-red-100' onClick={()=>{swiper.slideNext()}}>Next</button>
        </div>
    )
}

export default SwiperNavButton;