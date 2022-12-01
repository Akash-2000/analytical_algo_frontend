import React from 'react'

export default function Home(props) {
  return (
    <div className='verify'>
        <div className='verifyform1'>
            <h1>Greetings!</h1>
        <h1>Welcome {localStorage.getItem("username")} </h1>
        </div>
    </div>
  )
}
