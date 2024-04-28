"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'



export default function CreateForm() {
  const router=useRouter()
  const [title,setTitle] =useState('');
  const [body,setBody]=useState('')
  const [priority,setPriority]=useState('low')
  const [isLoading , setIsloading]=useState(false)
  async function handleSubmit(e){
    e.preventDefault() //prevent default behavior which is refrreshing the page when the form is submitted
    setIsloading(true)
    const ticket={title , body, priority , user_email:"aminemechrafiaminne@gmail.com"}
    const response= await axios.post(`http://localhost:4000/tickets`, ticket)
    if(response.status===201){
      console.log(response)
      router.refresh();
      router.push('/tickets')
    }
      
  }
  return (
    <div>
    
<form onSubmit={handleSubmit} class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" id="email" class="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
  </div>
  <div class="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
    <textarea value={body} onChange={(e)=>setBody(e.target.value)} id="password" class="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div class="mb-5">
  
    <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select the priority</label>
  <select value={priority} onChange={(e)=>setPriority(e.target.value)} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option>medium</option>
    <option>low</option>
    <option>high</option>
  </select>
  {!isLoading && <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>}
  {isLoading && <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Adding...</button>}
  
  </div>
 
  
</form>

    </div>
  )
}
