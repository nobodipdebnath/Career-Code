import React, { useEffect, useState } from 'react';
import Header from '../components/Home/Header';
import HotJobs from '../components/Home/HotJobs';
import axios from 'axios';

const HomePage = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
        .then(res => setJobs(res.data))
    },[])
    return (
        <div>
            <Header> </Header>
            <HotJobs jobs={jobs}></HotJobs>
        </div>
    );
};

export default HomePage;