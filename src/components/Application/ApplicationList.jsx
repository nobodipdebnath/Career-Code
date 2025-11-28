
const ApplicationList = ({ applications }) => {
const jobs = applications;

    return (
        <div>
            <h2 className="text-3xl">{jobs.length}</h2>
        </div>
    );
};

export default ApplicationList;
