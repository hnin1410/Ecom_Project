import { FaFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
function Contact (){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_fgnizoy', 'template_z3xep4f', form.current, 'aUvO1AOSBudXOBpyd',
          )}
    return(
        <main className="mt-[20px]">
            <section className="grid grid-cols-[30%_50%] gap-4 ml-[120px] mb-[120px]"> 
                <div className="mt-[20px] ml-[30px]">
                    <article className="flex flex-col items-center border rounded-xl">
                        <FaFacebook className="w-[40px] mt-[10px]"/>
                        <h1>Facebook</h1>
                        <h5>Thae Thae</h5>
                        <a className="mb-[10px]">Send Message</a>
                    </article>
                    <article className="flex flex-col mt-[20px] mb-[20px] items-center border rounded-xl">
                        <FaFacebookMessenger className="mt-[10px]"/>
                        <h1>Messenger</h1>
                        <h5>Thae Thae</h5>
                        <a className="mb-[10px]">Send Message</a>
                    </article>
                    <article className="flex flex-col items-center border rounded-xl">
                        <MdEmail className="mt-[10px]"/>
                        <h1>Email</h1>
                        <h5>hninwutyi0940@gmail.com</h5>
                        <a className="mb-[10px]">Send Message</a>
                    </article>
                </div>
                <div className="bg-gray-100 mt-[20px] flex flex-col items-center">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 mt-[30px]">
                        <input type='text' placeholder="Name" name='name' className="w-[400px] pl-[10px] h-[50px] rounded-lg"></input>
                        <input type='email' placeholder="Email" name='email'className="w-[400px] h-[50px] pl-[10px] rounded-lg"></input>
                        <textarea placeholder="Message" name='message' className="w-[400px] h-[50px] pl-[10px] rounded-lg"></textarea>
                        <button className="text-left border pl-[25px] w-[150px] h-[40px] rounded-lg">Send Message</button>
                    </form>
                </div>
           </section>
        </main>
    )
}

export default Contact;