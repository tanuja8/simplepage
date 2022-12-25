import React from 'react'

export default function Contact() {
  return (
    <div className='container mx-auto'>
        <h1 className='text-center my-4'>Contact</h1>
      <form className='text-center'>
        <input type="text" placeholder='Enter Your Name' className='w-50 p-2' /> <br></br>
        <input type="email" placeholder='Enter your email' className='my-3 w-50 p-2'/> <br></br>
        <input type="text" placeholder='Enter your Phone Number' className='mb-3 w-50 p-2'/> <br></br>
        <button type="button" className="btn btn-danger px-5">SUBMIT</button>
      </form>
    </div>
  )
}
