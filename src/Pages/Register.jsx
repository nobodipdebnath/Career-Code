import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from '../assets/Lotties/register.json'
import { AuthContext } from '../context/AuthContext/AuthContext';
import GoogleSignIn from '../components/Share/GoogleSignIn';

const Register = () => {
    const {createUser} = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // Create user
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className='flex items-center gap-4 mx-[7%]'>
            <div className='w-[40%]'>
                <Lottie loop={true} animationData={registerLottie}>

                </Lottie>
            </div>
            <div className='w-[50%] mx-auto p-4 bg-gray-100 my-10 rounded-lg shadow-md'>
            <h1 className='text-center text-3xl font-bold'>Register Now!</h1>
            <form onSubmit={handleRegister} className='mt-4 flex flex-col gap-4'>
                <div className='flex flex-col gap-3'>
                    <label>Email</label>
                    <input type="email" name="email" className='w-full py-4 px-5 border border-gray-300 outline-none rounded-lg' placeholder='Enter Your Email' required />
                </div>
                <div className='flex flex-col gap-3'>
                    <label>Password</label>
                    <input type="password" name="password" className='w-full py-4 px-5 border border-gray-300 outline-none rounded-lg' required placeholder='Enter Your Password' />
                </div>
                <div>
                    <button type='submit' className='py-4 w-full bg-blue-700 text-white font-semibold rounded-lg cursor-pointer'>Register</button>
                </div>
            </form>
            <GoogleSignIn></GoogleSignIn>
        </div>
        </div>
    );
};

export default Register;