import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer className='absolute w-screen h-12 bg-pink-400 inset-x-0 bottom-0'>
        <div className='text-white font-sans text-xs flex justify-center items-center'>
            <p className='mt-4'>2024 ©Bacolanta, Celeste Beatrix L.</p>
        </div>
    </footer>
    )
  }
}

export default Footer