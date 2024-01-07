import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Heading from './Heading';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoIosCheckmarkCircle } from 'react-icons/io';

const Contact = () => {

  const form  = useRef();

  const [done , setDone] = useState(false)
 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7shkuwq', 'template_1ek4ysk', form.current, 'K97Cd9Y4UQyqn3mZX')
      .then((result) => {
          // console.log(result.text);
          setDone(true)
      }, (error) => {
          // console.log(error.text);
      });

      
      
      setTimeout(()=>{
        setDone(false)
      } , 5000)

      e.target.reset();

};

  return (
    <div className='flex flex-col mt-5'>
      <Heading text="Contact" />
      <div className='flex flex-col justify-center items-center gap-5 lg:gap-20 lg:flex-row '>
        <div className='flex flex-col gap-3 [&>*:nth-child(n)]:border-2 [&>*:nth-child(n)]:border-white [&>*:nth-child(n)]:flex
        [&>*:nth-child(n)]:flex-col [&>*:nth-child(n)]:items-center [&>*:nth-child(n)]:gap-3 [&>*:nth-child(n)]:p-5 [&>*:nth-child(n)]:rounded-2xl'>
          <article 
          onClick={()=>{
            window.open("mailto:abhishekpethe433@gmail.com")
          }}>
            <MdOutlineEmail className='text-2xl' />
            <h4 className='max-[500px]:hidden'>Email</h4>
            
            <p className='text-center'>Send an Email</p>
          </article>

          <article 
          onClick={()=>{
            window.open("https://m.me/abhishekpethe433")
          }}>
            <FaFacebookF className='text-2xl' />
            <h4 className='max-[500px]:hidden'>Messenger</h4>
            
            <p className='text-center'>Send a Message</p>
          </article>

          <article
          onClick={()=>{
            window.open("https://www.linkedin.com/in/abhishek-pethe")
          }}>
            <FaLinkedinIn className='text-2xl' />
            <h4 className='max-[500px]:hidden'>Linkedin</h4>
          
            <p className='text-center'>Connect via Linkedin</p>
            
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail} className='mx-2 flex flex-col gap-5  [&>*:nth-child(n)]:p-5 [&>*:nth-child(n)]:border-2 [&>*:nth-child(n)]:border-white [&>*:nth-child(n)]:bg-transparent [&>*:nth-child(n)]:rounded-xl w-full'>
            <input type="text" name="name" placeholder='Your Full Name' required className='w-full' />
            <input type="email" name="email" placeholder='Your Email Address' required className='w-full' />
            <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' className='resize-none' required></textarea>
           
            
            <button type="submit" className='btn-primary mt-0 '>Send Message</button>
            {done && <h2 className='text-green-600 flex flex-row gap-3 justify-center items-center border-2 border-white w-fit'>Email Sent <IoIosCheckmarkCircle /></h2> }
           
        </form>

        {/* <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email Address' required />
            <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
            {done && <h2 className='sent'>Email Sent <IoIosCheckmarkCircle /></h2> }
          </form> */}
        

      </div>
    </div>
  )
}

export default Contact