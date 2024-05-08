import React, { Component } from 'react'

export class Students extends Component {
  render() {
    return (
        <div className='w-screen h-screen bg-gray-100 font-sans flex justify-center items-center flex-col'>
        <div>
        <h1 className='text-blue-950 font-extrabold text-2xl'>Welcome Back, Student!</h1>
        </div>
        <div>
        <h2 className='text-blue-950 mt-2'>The contents for Students will be displayed here.</h2>
        </div>
      </div>
    )
  }
}

export default Students