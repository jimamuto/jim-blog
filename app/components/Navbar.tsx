"use client"
import Link from 'next/link';
const Navbar =()=>{
return(
    <nav className= "flex gap-16 justify-center">
    <Link href='/'>Home</Link>
    <Link href='/about'> About me</Link>
    <Link href='/'>Porfolio</Link>
    </nav> 

)}
export default Navbar
