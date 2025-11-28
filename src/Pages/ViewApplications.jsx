import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
    axios
      .patch(`http://localhost:3000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Status Updated!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl">
        {applications.length} Application for : {job_id}
      </h1>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Applicant</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((job, idx) => (
              <tr key={job._id}>
                <th>{idx + 1}</th>
                <td>{job.applicant}</td>
                <td>Quality Control Specialist</td>

                <td>
                  {/* ✔️ Correct React way */}
                  <select
                    defaultValue={job.status}
                    onChange={(e) => handleStatusChange(e, job._id)}
                    className="select bg-gray-100 border select-ghost"
                  >
                    <option disabled>Update Status</option>
                    <option value="Pending">Pending</option>
                    <option value="interView">Interview</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Hired">Hired</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
