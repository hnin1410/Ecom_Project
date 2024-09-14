import { useContext } from "react";
import { Context } from "./context";
import { FaRegTrashCan } from "react-icons/fa6";

function Heart (){ 
    const {heartList , wishlistCart} = useContext(Context);
    const deleteWishList =(i)=>{
        const deleteItem = heartList.filter((item)=>{
            return( item.id !== i)
        })
        localStorage.setItem('wishlist', JSON.stringify(deleteItem))
        setTimeout(()=>{window.location.reload()}, 500)
    }
    return(
        <main className="mt-[30px]">
            <div className="grid grid-cols-4 gap-2 gap-y-[30px] ml-[80px] mr-[80px] flex flex-col justify-items-center">
                {heartList.map((heart, index)=>{
                    return(
                        <div className="relative">
                            <img src={heart.images[0]} className="w-[200px] h-[200px]"></img>
                            <span className="absolute top-[15px] right-[10px]" onClick={()=>{deleteWishList(heart.id)}}><FaRegTrashCan/></span>
                            <div className="filter">{heart.tittle}</div>
                            <div className="filter mt-[15px] mb-[15px]">${heart.price}</div>
                            <button className="filter bg-red-200 py-[5px] px-[30px] rounded-xl" onClick={()=>{wishlistCart(heart)}}>Add To Cart</button>
                        </div>
                )})}
            </div>
        </main>
    )
}

export default Heart;