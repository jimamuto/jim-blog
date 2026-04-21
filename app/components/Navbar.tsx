"use client"
import Link from 'next/link';
import { FaTwitter,FaGithub,FaInstagram } from "react-icons/fa";
import Avatar from 'react-avatar';
const Navbar =()=>{
return(
    <nav className="flex gap-16">
    <Avatar name="Jim Amuto" round={true} size={50}/>
    <h1> Jim Amuto</h1>
    <p> Software Architect</p>
      <Link href="/about">About Me</Link>
    <FaTwitter />
    <FaGithub />
    <FaInstagram />
    </nav> 

)}
export default Navbar
