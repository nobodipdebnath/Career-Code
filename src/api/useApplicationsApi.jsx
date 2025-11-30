import React from 'react';
import useAxios from '../Hooks/useAxios';

const useApplicationsApi = () => {

    const axiosInstance = useAxios();

    const myApplicationPromise = email => {
        return axiosInstance.get(`applications?email=${email}`).then(res => res.data);
    }

    
    return {
        myApplicationPromise
    };
};

export default useApplicationsApi;