import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const {id: jobId} = useParams();
    // console.log(jobId);
    const {user} = useAuth();

    const handelSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        const portfolio = form.portfolio.value;

        const application = {
            jobId,
            applicant: user.email,
            linkedIn,
            github,
            resume,
            portfolio
        }

        axios.post('http://localhost:3000/applications', application)
        .then(res => {
            // console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Your application has been submitted",
                showConfirmButton: false,
                timer: 1500
                });
            }
        })
        .catch(error => {
            console.log(error);
        })

        // console.log(resume, github, portfolio, linkedIn)
    }
    return (
        <div>
            <h1 className='text-center text-2xl font-semibold my-10'>Job Apply</h1>
            <form onSubmit={handelSubmit} className='w-1/2 mx-auto shadow-md rounded-xl py-10 px-5 flex flex-col gap-3 mb-10'>
                <div className='flex flex-col gap-2'>
                    <label>LinkedIn</label>
                    <input className='py-3 px-5 bg-gray-100 outline-gray-200 rounded-lg' placeholder='Enter LinkedIn Url' type="url" required name="linkedIn" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Github</label>
                    <input className='py-3 px-5 bg-gray-100 outline-gray-200 rounded-lg' placeholder='Enter Github Url' type="url" required name="github" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Resume</label>
                    <input className='py-3 px-5 bg-gray-200 outline-gray-200 rounded-lg' placeholder='Enter Resume Url' type="url" required name="resume" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Portfolio</label>
                    <input className='py-3 px-5 bg-gray-200 outline-gray-200 rounded-lg' placeholder='Enter Portfolio Url' type="url" required name="portfolio" />
                </div>
                <div>
                    <button className='py-3 w-full bg-blue-500 text-white font-semibold cursor-pointer rounded-lg' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;