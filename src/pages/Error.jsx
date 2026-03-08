import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div className="bg-success d-flex flex-column justify-content-center align-items-center min-vh-100"> 
      <h1 className="text-6xl text-white font-serif font-bold mb-4">404 Not Found</h1>     
      <p className="text-xl text-white mb-6">The page you are looking for does not exist.</p>
      <Link to="/" className="text-white">Go to Home</Link>
    </div>
  )
}

export default Error
