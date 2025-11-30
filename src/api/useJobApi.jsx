import React from 'react';
import useAxios from '../Hooks/useAxios';

const useJobApi = () => {

    const axiosInstance = useAxios();

    const jobsCreatedByPromise = email => {
        return axiosInstance.get(`jobs/applications?email=${email}`).then(res => res.data);
    }
    return {
        jobsCreatedByPromise
    };
};

export default useJobApi;