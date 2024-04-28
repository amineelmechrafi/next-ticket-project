import React, { Suspense } from 'react'
import TicketsList from './ticketsList'
import Loading from '../loading'
export default function tickets() {
  return (
    <div>
      <nav>
        <h1>tickets</h1>
        <p>currently open</p>
      </nav>
      <Suspense fallback={<Loading />}>
      <TicketsList />
      </Suspense>
      
    </div>
  )
}
