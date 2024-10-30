"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import Link from 'next/link';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Image from 'next/image';

const Home = () => {
  const pathname = usePathname();

  return (
    <main className=" px-4">
      <div className="heading">
        <h4>Hello</h4>
        <h1>
          {`I'm`} <span>Shaheen</span>, <br />
          <span>Creative</span> Developer
        </h1>
        </div>
        <div className="hero">
  <div className='quote'>
    <RiDoubleQuotesL />
    <p className='text'>
     We will provide you awesome and <br /> clean websites
      by Next.js and React <br /> exceptional and highly
      recommend <br /> -ed nowadays at your own choice.
    </p>
    <div className='icon'>
      <FaFacebook className='icon' />
      <IoLogoWhatsapp className='icon' />
      <RiInstagramFill className='icon' />
      <FaTwitter className='icon' />
    </div>
  </div>

  <div className="image-container">
    <Image src="/c1.png" alt="" width={300} height={300} />
    <ul>
    <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
        <Link href="/">Portfolio</Link>
    </li>
    <li className={`nav-item ${pathname === '/hire' ? 'active' : ''}`}>
        <Link href="/hire">Hire Me</Link>
    </li>
</ul>
  </div>

  <div className='container'>
    <div className='card '>
    <div className='stars'>
      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
    </div>
    <p className='title'>12Years</p>
    <p>Experience</p>
  </div>
  </div>
</div>

      
    </main>
  );
}

export default Home;
