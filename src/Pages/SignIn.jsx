import React, { use } from 'react';
import registerLottie from '../assets/Lotties/register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import toast from 'react-hot-toast';
import GoogleSignIn from '../components/Share/GoogleSignIn';
import { useLocation, useNavigate } from 'react-router';

const SignIn = () => {
    const {signIn} = use(AuthContext);
    const location = useLocation();
    const from = location.state || '/';
    const navigate = useNavigate();

    const handleSignIn =(e) => {
        e.preventDefault();
        const form = e.target;
        const email= form.email.value;
        const password = form.password.value;

        // Sign in
        signIn(email, password)
        .then(result => {
            console.log(result.user)
            toast.success('Login Success')
            navigate(from);
        })
        .catch(error => {
            toast.error(error.message);
        })
    }
    return (
        <div className='flex items-center gap-4 mx-[7%]'>
            <div className='w-[40%]'>
                <Lottie loop={true} animationData={registerLottie}>

                </Lottie>
            </div>
            <div className='w-[50%] mx-auto p-4 bg-gray-100 my-10 rounded-lg shadow-md'>
            <h1 className='text-center text-3xl font-bold'>Sign In Now!</h1>
                <form onSubmit={handleSignIn} className='mt-4 flex flex-col gap-4'>
                    <div className='flex flex-col gap-3'>
                        <label>Email</label>
                        <input type="email" name="email" className='w-full py-4 px-5 border border-gray-300 outline-none rounded-lg' placeholder='Enter Your Email' required />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label>Password</label>
                        <input type="password" name="password" className='w-full py-4 px-5 border border-gray-300 outline-none rounded-lg' required placeholder='Enter Your Password' />
                    </div>
                    <div>
                        <button type='submit' className='py-4 w-full bg-blue-700 text-white font-semibold rounded-lg cursor-pointer'>Signin</button>
                    </div>
                </form>
                <GoogleSignIn from={from}></GoogleSignIn>
            </div>
        </div>
    );
};

export default SignIn;