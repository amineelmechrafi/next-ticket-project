import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './dojo-logo.png'

export default function NavBar() {
  return (
    
     <nav>
      <Image src={logo} width={70} quality={100} placeholder='blur'/>
        <h1>Amine</h1>
        <Link href="/" >Home</Link><br />
        <Link href="/tickets" >tickets</Link><br />
        

      </nav> 
    
  )
}
