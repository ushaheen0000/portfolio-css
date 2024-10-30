"use client"
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MdArrowOutward } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";

const Footer = () => {
  const [email, setEmail] = useState(''); // To store email input for subscription
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = useState({

    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    // Reset form after submission
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });

    alert('Your message has been sent!');
  };



  // Function for handling the subscribe button click
  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email.');
    }
  };
  return (
    <footer>
      <div className='image'>
        <Image src="/logo1.png" alt="Logo" width={60} height={60} />
      </div>
      <div className='footer-heading'>
        <div>
          <h1 className='heading'>{`Let's Connect There`}</h1>
          <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti possimus dignissimos <br /> iure hic, odio nemo dicta, sequi illo, esse harum accusantium necessitatibus expeditaes <br /> incidunt saepe earum delectus explicabo voluptates.</p>
          <div className='i'>
            <FaFacebook className='i-icon' />
            <IoLogoWhatsapp className='i-icon' />
            <RiInstagramFill className='i-icon' />
            <FaTwitter className='i-icon' />
          </div>
        </div>
        <div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className='btn-1'>
              Hire Me <MdArrowOutward className='arrow' />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='sub-heading'>Get In <span>Touch</span> With</SheetTitle>
                <SheetDescription className='description'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat sapiente repellendus officiis ipsam?</p>
                </SheetDescription>
              </SheetHeader>

              <form onSubmit={handleSubmit} className="form-1 mt-4 px-6">
                <div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder='Your Name'
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder='Phone Number'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    id="message"
                    name="message"
                    placeholder='Your Message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit">Submit Now</button>
              </form>

              <SheetFooter>
              </SheetFooter>
            </SheetContent>

          </Sheet>
        </div>

      </div>
      <div className='contact'>
        <div>
          <h3 className='heading-3'>Navigation</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className='heading-3'>Contact</h3>
          <div>
            <p>+000 123 456 789</p>
            <p>ushaheen0000@gmail.com</p>
            <p>uzmashaheen.com</p>
          </div>
        </div>
        <div>
          <h3 className='heading-3'>Get the latest information</h3>
          <div className="input">
            <input
              type="text"
              id="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
         />
            <button
              onClick={handleSubscribe}>
              <IoSend />
            </button>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p>CopyRight@ 2024 All Rights Reserved
          {`Use terms & conditions | Privacy Policy`}</p>
      </div>

    </footer>
  );
}

export default Footer;
