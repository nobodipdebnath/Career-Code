import React, { Suspense } from 'react';
import useAuth from '../Hooks/useAuth';
import JobList from '../components/Application/JobList';
import { jobsCreatedByPromise } from '../api/jobsApi';

const MyPostedJob = () => {

    const {user} = useAuth();
    return (
        <div>
            <h3 className="text-4xl text-center my-10 font-semibold ">My Posted Jobs : </h3>
            <Suspense>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}>
                </JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;