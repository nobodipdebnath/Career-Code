import { Link, useLoaderData } from 'react-router';

const JobDetales = () => {
    const job = useLoaderData();
    const {title, _id, company} = job;
    return (
        <div>
            <h2 className='text-5xl text-center'>{title}</h2>
            <p className='text-2xl'>Company: {company}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className='py-3 px-5 border rounded-lg my-10'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetales;