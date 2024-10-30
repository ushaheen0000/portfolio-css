"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
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
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    alert('Your message has been sent!');
  };

  return (
    <main className=' max-w-screen-xl mx-auto '>
      <section className='background-img'>
        <Image
          src="/f.jpg"
          layout="fill"
          quality={100}
          alt="Background Image"
          className=' object-cover' />
        <div className="heading-h1">
                <h1 className='text-heading'>Contact <span>Us</span></h1>
          <form onSubmit={handleSubmit} className="form">
            <h2>Get In <span>Touch</span> With <span>Me</span></h2>
            <div>
              <input
  className='input-1'
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                className='input-1'
                placeholder='Phone Number'
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                 />
            </div>
            <div>
              <input
                className='input-1'
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <textarea
              className='textarea-1'
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                rows={4}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="buttn" type="submit">Submit Now</button>
          </form>
        </div>
      </section>
      <section className='map'>
        <div >
          <h3 className="map-heading">Find <span>Us</span> On The <span>Map</span></h3>
          <div className=''>
            <iframe
            
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509168!2d144.95373531531592!3d-37.81627997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11b0ef%3A0x5045675218ceed5!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1615589187060!5m2!1sen!2sau"
              width="300"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
