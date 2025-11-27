import JobCard from "../Share/JobCard";


const HotJobs = ({jobs}) => {
    return (
        <div className="grid container mx-auto my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                jobs.map(job => <JobCard job={job} key={job._id}></JobCard>)
            }
        </div>
    );
};

export default HotJobs;