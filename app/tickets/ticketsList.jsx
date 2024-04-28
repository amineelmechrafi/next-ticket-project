import Link from 'next/link';
import React from 'react'

async function getData(){
  const response=await fetch('http://localhost:4000/tickets' ,{
    next:{
      revalidate:0
    }
  });
  return response.json();
}

export default async function TicketsList() {
  const data=await getData();
  return (
    <div>
      {data.map((ticket)=>(
        <div key={ticket.id} className='card '>
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0,300)}...</p>
            <div className={`pill ${ticket.priority}`} >
              {ticket.priority} priority
            </div>
            </Link>
        </div>
      )
    )}
    {data.lenght===0 && <p>no data found</p>}
    </div>
  )
}
