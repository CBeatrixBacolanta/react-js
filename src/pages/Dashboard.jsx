import React, { Component } from 'react';
import { GiTakeMyMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { LuPartyPopper } from "react-icons/lu";
import { LiaCalendarWeekSolid } from "react-icons/lia";



export class Dashboard extends Component {
  render() {
    return (
      <div className='w-screen h-screen bg-gray-100 font-sans'>
        <h1 className='relative flex justify-center items-center text-blue-950 font-extrabold mt-24 mb-1 text-2xl'>Welcome Back, Celeste Beatrix!</h1>
        <h2 className='text-xs relative flex justify-center items center text-blue-950 mt-26'>Always stay updated in our Student Portal.</h2>
        <h2 className=' ml-40 text-md font-bold text-blue-950 mt-7'>Finances</h2>

        <div className='inline-flex mt-5 ml-40 mr-16 '>
            <div className='w-72 h-52 bg-white shadow-lg shadow-gray-300 rounded-lg mr-12'>
                <GiTakeMyMoney className='w-24 h-24 text-pink-300 mx-auto mt-7'></GiTakeMyMoney>
                <h3 className='mt-3 text-lg flex justify-center font-bold text-blue-950'>₱ 10,000.00</h3>
                <h4 className='text-xs flex justify-center text-gray-500'>Total Payable</h4>
            </div>
            <div className='w-72 h-52 bg-white shadow-lg shadow-gray-300 rounded-lg mr-12'>
                <GiPayMoney className='w-24 h-24 text-pink-300 mx-auto mt-7'></GiPayMoney>
                    <h3 className='mt-3 text-lg flex justify-center font-bold text-blue-950'>₱ 24,000.00</h3>
                    <h4 className='text-xs flex justify-center text-gray-500'>Total Paid</h4>
            </div>
            <div className='w-72 h-52 bg-white shadow-lg shadow-gray-300 rounded-lg'>
                <BsFillBarChartLineFill className='w-24 h-24 text-pink-300 mx-auto mt-7'></BsFillBarChartLineFill>
                        <h3 className='mt-3 text-lg flex justify-center font-bold text-blue-950'>₱ 750.00</h3>
                        <h4 className='text-xs flex justify-center text-gray-500'>Others</h4>
            </div>
        </div>

        <h2 className=' ml-40 text-md font-bold text-blue-950 mt-9'>Events and Dates</h2>
        <div className='inline-flex mt-5 ml-56 mr-16'>
            <div className='w-96 h-32 bg-pink-200 shadow-lg shadow-gray-300 rounded-lg mr-12'>
                <LuPartyPopper className='w-20 h-20 text-blue-900 float-right mr-16 mt-7'></LuPartyPopper>
                <h3 className='mt-7 text-lg ml-16 mb-3  font-bold text-blue-950'>Future Events</h3>
                <button className='ml-16 w-24 h-7 rounded-md bg-pink-300 font-semibold'>See More</button>
            </div>
            <div className='w-96 h-32 bg-pink-200 shadow-lg shadow-gray-300 rounded-lg'>
                <LiaCalendarWeekSolid className='w-20 h-20 text-blue-900 float-right mr-16 mt-7'></LiaCalendarWeekSolid>
                <h3 className='mt-7 text-lg ml-16 mb-3  font-bold text-blue-950'>School Calendar</h3>
                <button className='ml-16 w-24 h-7 rounded-md bg-pink-300 font-semibold'>See More</button>
            </div>

        </div>

      </div>
    )
  }
}

export default Dashboard