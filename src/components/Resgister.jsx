import React from 'react'
import { NavLink } from 'react-router-dom';
import Main from './Main';

const Resgister = () => {
    return <>
        <div className='bg-violet-400 h-screen flex justify-center items-center '>


            <div className='bg bg-indigo-50 h-1/2 w-1/4 flex flex-col justify-center items-center rounded-lg shadow-2xl shadow-slate-800 opacity-100 gap-3'>
                <div>
                    <h1 className='text-bold underline text-2xl'>Register</h1>
                </div>

                <div>
                    <labe>First name </labe>
                    <input className='italic font-black p-2 shadow-lg' type='text' placeholder=''></input>
                </div>


                <div><label>Last name </label>
                    <input className='italic font-black p-2 shadow-lg' type='text' placeholder=''></input>
                </div>

                <div className='flex gap-3'>
                    <lable>Gender:</lable>
                    <label>Male </label>
                    <input className='italic font-black p-2 shadow-lg' type='checkbox' placeholder=''></input>
                    <label>Female </label>
                    <input className='italic font-black p-2 shadow-lg' type='checkbox' placeholder=''></input>
                    <label>Others </label>
                    <input className='italic font-black p-2 shadow-lg' type='checkbox' placeholder=''></input>
                </div>


                <div>
                    <label>Set password </label>
                    <input className='italic font-black p-2 shadow-lg' type='' placeholder=''></input>
                </div>

                <div>
                    <label>Repeat password </label>
                    <input className='italic font-black p-2 shadow-lg' type='' placeholder=''></input>
                </div>

                <div className=' flex gap-8'>
                    <NavLink to='/Main'><button className='bg-red-500 text-white font-bold p-3 rounded-lg shadow-lg'>Decline</button></NavLink>
                    <button className='bg-green-500 text-white font-bold p-3 rounded-lg shadow-lg'>Proceed</button>
                </div>




            </div>
        </div>

    </>
}

export default Resgister