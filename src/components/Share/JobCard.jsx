import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";
import { LiaStopwatchSolid } from "react-icons/lia";
import { Link } from 'react-router';

const JobCard = ({job}) => {
    // console.log(job)
    const{title, location, jobType, applicationDeadline, company, company_logo, description, requirements, salaryRange, _id} = job;
    return (
        <div className='p-6 border border-gray-300 rounded-2xl'>
            <div className='flex items-center gap-2'>
                <img className='h-14 w-14 object-cover' src={company_logo} alt="" />
                <div>
                    <p className='text-2xl font-bold'>{company}</p>
                    <p className='flex items-center gap-2'><FaLocationDot /><span>{location}</span></p>
                </div>
            </div>
            <div className='mt-4 '>
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <div className='flex mt-2 items-center gap-6'>
                    <div className='flex items-center gap-1'>
                        <IoBriefcase/>
                        <p>{jobType}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <LiaStopwatchSolid/>
                        <p>{applicationDeadline}</p>
                    </div>
                </div>
            </div>
            <p className='py-3'>{description}</p>
            <div className='flex items-center gap-4'>
                <h3 className='py-2 px-5 border rounded-lg shadow-sm font-medium hover:bg-blue-300 duration-500 border-gray-100'>{requirements[0]}</h3>
                <h3 className='py-2 px-5 border rounded-lg shadow-sm font-medium hover:bg-blue-300 duration-500 border-gray-100'>{requirements[1]}</h3>
            </div>
            <div className='flex items-center justify-between my-5'>
                <p className='text-sm text-blue-400'>Salary: {salaryRange.min} - {salaryRange.max}</p>
                <div>
                    <Link to={`jobs/${_id}`}>
                        <button  className='py-3 px-5 shadow-xl font-semibold text-white bg-blue-500 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;