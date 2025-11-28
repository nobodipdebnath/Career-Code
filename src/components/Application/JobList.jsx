import React, { use } from "react";
import { Link } from "react-router";

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div>
      <h2 className="text-3xl text-center font-semibold my-10">
        Jobs Created By You : {jobs.length}
      </h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Date Line</th>
              <th>Application Count</th>
              <th>Vew Applications</th>
            </tr>
          </thead>
          <tbody>
            {
                jobs.map((job, idx) => {
                    return (
                        <tr key={job._id}>
                            <th>{idx + 1}</th>
                            <td>{job.title}</td>
                            <td>{job.applicationDeadline}</td>
                            <td>{job.application_count}</td>
                            <td className="btn"><Link to={`/applications/${job._id}`}>View Applications</Link></td>
                        </tr>
                    )
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
