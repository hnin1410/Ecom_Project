import { useState,useEffect} from 'react';
function ScrollTopButton(){
    const [scrollactive, setscrollactive] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100){
            setscrollactive(true)
        } else {
            setscrollactive(false)
        }
    })
    },[])
    const handleScroll=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        }   
        )
    }
    return(
        <main>
            {scrollactive &&
            <div className='fixed bottom-[10px] right-[30px] bg-black text-white px-4 py-3' onClick={handleScroll}>
                *
            </div>
            }
        </main>
    )
}

export default ScrollTopButton;