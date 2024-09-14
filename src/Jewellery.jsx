import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Data from './data.jsx';
import ReactPaginate from 'react-paginate';
import './App.css';
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
function Jewellery () {
    const {productId} = useParams();
    const [current, setCurrent] = useState()
    const [pageCount, setPageCount] = useState(0)
    const itemsPerPage=6
    const [itemOffset, setItemOffset] = useState(0);
    const [minValue, setMinValue] =useState('');
    const [maxValue, setMaxValue] =useState('');
    const FormHandle =(e)=> {
        e.preventDefault();
        const priceFilter = Data.filter((price)=>{
            return (
                price.price<= maxValue && price.price >= minValue
            )
        })
        setCurrent(priceFilter)
        console.log(current)
    }
    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setCurrent(Data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(Data.length / itemsPerPage));
    },[itemOffset,itemsPerPage,Data])

   
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % Data.length;
      setItemOffset(newOffset);
    };
    return(
        <main className="flex flex-row ">
            <div className="mt-[30px] ml-[70px] mr-[50px] w-[280px]  flex flex-col ">
                <div className='border border-slate-200'>
                    <h2 className='filter text-left bg-slate-200 w-full leading-5 text-base font-normal tracking-[0.5px] px-[10px] py-[10px]'>Filter By Category</h2>
                    <div className='grid grid-row-3 mt-[17px]'>
                        <span className='filter text-sm px-[20px] text-left'>Feature</span>
                        <span className='filter my-[16px] text-sm px-[20px] text-left'>New Arriavel</span>
                        <span className='filter text-sm mb-[10px] px-[20px] text-left'>Top Selling</span>
                    </div>
                </div>
                <div className='border border-slate-200 mt-[30px]'>
                    <h2 className='filter text-left bg-slate-200 w-full leading-5 text-base font-normal tracking-[0.5px] px-[10px] py-[10px]'>Filter By Price</h2>
                    <div className='text-left mt-[30px] mb-[30px]'>
                        <form onSubmit={FormHandle}>
                            <input type='text' value={minValue} onChange={(e)=>{setMinValue(e.target.value)}} placeholder='From' className='w-[100px] ml-[20px] border border-slate-200 outline-0'></input>
                            <input type='text' value={maxValue} onChange={(e)=>{setMaxValue(e.target.value)}} placeholder='To' className='w-[100px] ml-[20px] border border-slate-200 outline-0'></input>
                            <input type='submit' className='opacity-0'></input>
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-[30px] bg-red-200 paginate-container"> 
               
                <>
                    <div className='grid grid-cols-3 gap-7 '>
                       { current &&
                            current.map((data)=>{
                                return (
                                    <div className='relative handle'>
                                        <Link to={`/${data.id}`}>
                                            <img src={data.images[0]} className='relative h-[250px] w-[250px]'/>
                                            <img src={data.images[1]} className='home-product2 h-[250px] w-[250px]'/>
                                        </Link>
                                        <div className=' flex flex-col'>
                                        <span className='text-base font-normal'>{data.tittle}</span>
                                        <span className='text-base font-normal mt-[8px]'>{data.price}</span>
                                        <div className='absolute flex flex-col right-[-44px] top-[10px]'>
                                            <span className='view mb-[10px] rounded-full p-[9px] bg-red-100 w-[36px] height-[36px] opacity-0'><FiShoppingCart/></span>
                                            <span className='heart w-[36px] height-[36px] rounded-full p-[9px] bg-red-100 opacity-0'><FiHeart/></span>
                                        </div>
                                </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        containerClassName="react-paginate px-[100px]"
                        pageClassName="ml-[10px] mr-[10px]"
                        // previousClassName="mr-[20px]"
                        // nextClassName="ml-[10px] mr-[10px]"

                    />
                 </>
                
            </div>
        </main>
    )
}

export default Jewellery;