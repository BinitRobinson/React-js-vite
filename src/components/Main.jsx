import React from 'react'
import{NavLink} from 'react-router-dom';

const Main = () => {
    return <>

        <div className='bg-violet-400 h-screen flex justify-center items-center '>


            <div className='bg bg-indigo-50 h-1/2 w-1/4 flex flex-col justify-center items-center rounded-lg shadow-2xl shadow-slate-800 opacity-100 gap-3'>
            <div>
                <h1 className='text-bold underline text-2xl'>Login</h1>
            </div>

                    <div>
                        <input className='italic font-black p-2 shadow-lg' type='text' placeholder='username'></input>
                    </div>


                    <div>
                        <input className='italic font-black p-2 shadow-lg' type='' placeholder='password'></input>
                    </div>

                    <div className=''>
                        <button className='bg-green-500 text-white font-bold p-3 rounded-lg shadow-lg'>Login</button>
                    </div>

                    <div className='flex gap-2'>

                        <input type='checkbox'></input>
                        <label>Remember me
                        </label>

                    </div>

                    <div className='flex fex-col gap-2'>
                    <h1>don't have an account</h1>

                        <h1 className='underline italic'>
                            <NavLink to='/Resgister'>Resgister</NavLink>
                        </h1>
                    </div>
                </div>







        </div>




    </>
}

export default Main