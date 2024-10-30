"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
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

const About = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [formData, setFormData] = useState({
    
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
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

  return (
    <main>
      <section>
        <div>
        <h1 className='main-heading'>About <span>Me</span></h1>
        <p className='text'>we provide you high standard clean websites with different styles </p>
        </div>
        <div className='section-2'>
        <div className='left'>
          <Image src="/img1.jpg" alt="" width={300} height={350} />
        </div>
        <div>
        <h2>Why <span> Hire Me ?</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Aspernatur, quaerat non. Laboriosam aliquam, <br />dolorem illum, dolores odio facilis nisi cumqueimpe <br />dit ducimus similique placeat consequuntur <br />quibusdam quos a deleniti exercitationem?</p>
        <div className='project'>
          <p><b>450 <sup>+</sup> </b> <br />Projects Completed</p>
          <p><b>450 <sup>+</sup></b> <br />Projects Completed</p>
        </div>
        <div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger  className='btn-2'>
           Hire Me
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className='sub-heading'>Get In <span>Touch</span> With</SheetTitle>
                <SheetDescription className='description'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia placeat sapiente repellendus officiis ipsam?</p>
                </SheetDescription>
              </SheetHeader>

              <form onSubmit={handleSubmit} className="form-1">
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
                    required></textarea>
                </div>
                <button type="submit">Submit Now</button>
              </form>

              <SheetFooter>
    
              </SheetFooter>
            </SheetContent>

          </Sheet>
        </div>
      </div>
      </div>
      </section >
    </main >
  )
}

export default About



