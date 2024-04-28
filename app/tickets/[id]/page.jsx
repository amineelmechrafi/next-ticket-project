import { notFound } from 'next/navigation';
import React from 'react'

export const dynamicParams=true;

export async function generateStaticParam(){
  const res=await  fetch('http://localhost:4000/tickets');
  const tickets=await res.json();
  return tickets.map((ticket)=>(
    {id :ticket.id}
  ))
}

async function getData(id){
  const response=await fetch('http://localhost:4000/tickets/'+id ,{
    next:{
      revalidate:30
    }
  });
  if(!response.ok){
    notFound();
  }
  return response.json();
}


export default async function tick({params}) {
  const ticket=await getData(params.id);
  return (
    <div>
            <nav>
              <h3>{ticket.title}</h3>
            </nav>
       <div className='card '>
            <h3>{ticket.user_email}</h3>
            <p>{ticket.body.slice(0,300)}...</p>
            <div className={`pill ${ticket.priority}`} >
              {ticket.priority} priority
            </div>
        </div>
    </div>
  )
}
