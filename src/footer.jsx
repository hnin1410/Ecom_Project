import logo from '../images/real logo.webp';
function Footer(){
    return(
        <main className='flex flex-col items-center bg-red-100 mt-[20px] relative'>
            <img src={logo} className='w-[200px] h[-[100px] mt-[40px]'></img>
            <span className='text-center line-clamp-3 ml-[300px] mr-[300px] mt-[20px]'>Sit amet conse ctetur adipisicing elit, sed doe eiusmod tempor incididunt ut laborea aaaeht dolore magna aliqua. labo  dolore fdsd magna aliqua.Sit amet conse ctetur adipisicing elit, sed doe eiusmod tempor incididunt ut laborea aaaeht dolore magna aliqua.</span>
            <div className='grid grid-cols-4 gap-4 mt-[45px]'>
                <div className='flex flex-col'>
                    <h2 className='font-medium text-lg tracking-wide'>CONTACT INFORMATION </h2>
                    <span className='mt-[30px] '>
                        4005, Silver business point India
                    </span>
                    <span className='ml-[-110px] mt-[10px] mb-[10px]'>+91 123456789</span>
                    <span className='ml-[-110px]'>info@gmail.com</span>
                </div>
                <div>
                    <h2 className='font-medium text-lg tracking-wide'>YOUR ACCOUNT</h2>
                    <ul className='p-0 justify-items-start mt-[30px] ml-[-70px]'>
                        <li className='ml-[-22px]'>Speical</li>
                        <li className='mt-[8px] mb-[8px]'>Price Drop</li>
                        <li >Contact Us</li>
                        <li className='mt-[8px] ml-[-8px]'>Our Store</li>
                    </ul>

                </div>
                <div>
                    <h2 className='font-medium text-lg tracking-wide'>OUR COMPANY</h2>
                    <ul className='p-0 justify-items-start mt-[30px] ml-[-70px]'>
                        <li className='ml-[-22px]'>Speical</li>
                        <li className='mt-[8px] mb-[8px]'>Price Drop</li>
                        <li >Contact Us</li>
                        <li className='mt-[8px] ml-[-8px]'>Our Store</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-medium text-lg tracking-wide ml-[-110px]'>NEWSLETTER</h2>
                    <input type='text' className='mt-[30px] mb-[10px] h-[33px]'></input>
                    <input type="button" value="submit" className='bg-black text-white h-[33px]'></input> 
                </div>
            </div>
        </main>
    )
}

export default Footer;