import Data from './data.jsx';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function Star({rate}){
    const rating= Array.from({length:5},(e,index) =>{ 

        return(
            <span>
                 {
                    rate >= index+1 ? (<FaStar />) : (<FaRegStar />)
                 }
            </span>
        )
    })
    return(
        <div className='absolute flex flex-row justify-between ml-[100px] top-[250px] star' >{rating}</div>
    )
}
export default Star;