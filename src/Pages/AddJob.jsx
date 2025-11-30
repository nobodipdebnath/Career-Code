import React from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handelAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };
    // Process requirement
    newJob.requirements = newJob.requirements
      .split(",")
      .map((res) => res.trim());
    // process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJob.status = "active";
    // save job to the data base
    axios
      .post("https://career-code-server-phi-five.vercel.app/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "This New Job has been saved and published",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(newJob);
  };

  return (
    <div className="w-[60%] mx-auto shadow-lg rounded-xl my-10 p-5">
      <h1 className="text-center text-4xl font-bold">Add a Job!</h1>
      <form onSubmit={handelAddAJob} className="flex flex-col gap-3">
        {/* Job Title */}
        <div className="flex flex-col gap-2">
          <label>Job Title</label>
          <input
            type="text"
            className="py-3 px-5 bg-gray-100 rounded-xl outline-gray-300 "
            placeholder="Job Title"
            name="title"
            required
          />
        </div>
        {/* Company Name */}
        <div className="flex flex-col gap-2">
          <label>Company</label>
          <input
            type="text"
            className="py-3 px-5 bg-gray-100 rounded-xl outline-gray-300 "
            placeholder="Job Company"
            name="company"
            required
          />
        </div>
        {/* Work Location */}
        <div className="flex flex-col gap-2">
          <label>Location</label>
          <input
            type="text"
            className="py-3 px-5 bg-gray-100 rounded-xl outline-gray-300 "
            placeholder="Job Location"
            name="location"
            required
          />
        </div>
        {/* Company logo */}
        <div className="flex flex-col gap-2">
          <label>Company Logo</label>
          <input
            type="url"
            className="py-3 px-5 bg-gray-100 rounded-xl outline-gray-300 "
            placeholder="Company Logo"
            name="company_logo"
            required
          />
        </div>
        {/* Job Type */}
        <div className="flex flex-col gap-2">
          <label>Job Type</label>
          <div className="filter p-1 border border-gray-300 rounded-xl bg-gray-100">
            <input className="btn btn-square" type="reset" value="×" />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="On-Side"
              aria-label="On-side"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </div>
        {/* Job Category */}
        <div className="flex flex-col gap-2">
          <label>Job Category</label>
          <select
            name="category"
            defaultValue="Pick a color"
            className="select w-full py-3 px-5 bg-gray-100 outline-none rounded-xl"
          >
            <option disabled={true}>Select job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </div>
        {/* Date Line */}
        <div className="flex flex-col gap-2">
          <label>Application Dateline</label>
          <input
            type="date"
            name="applicationDeadline"
            className="input w-full py-3 px-5 rounded-xl bg-gray-100 outline-none cursor-pointer"
          />
        </div>
        {/* Salary Range */}
        <div className="flex flex-col gap-2">
          <label>Salary Range</label>
          <div className="grid lg:grid-cols-3 items-center gap-3">
            <div className="flex flex-col gap-2">
              <label>Minimum Salary</label>
              <input
                required
                type="text"
                name="min"
                className="py-3 px-5 bg-gray-100 rounded-xl outline-gray-300 "
                placeholder="Min Salary"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Minimum Salary</label>
              <input
                required
                type="text"
                name="max"
                className="py-3 px-5 bg-gray-100 rounded-xl outline-gray-300 "
                placeholder="Min Salary"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Currency</label>
              <select
                name="currency"
                defaultValue="Currency"
                className="select w-full py-3 px-5 bg-gray-100 outline-none rounded-xl"
              >
                <option disabled={true}>Select job Category</option>
                <option>BDT</option>
                <option>USD</option>
                <option>UR</option>
              </select>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className="flex flex-col gap-2">
          <label>Description</label>
          <textarea
            required
            className="bg-gray-100 rounded-xl outline-none p-5 "
            placeholder="Enter job Description"
            rows={3}
            cols={3}
            name="description"
          ></textarea>
        </div>
        {/* Job requirements */}
        <div className="flex flex-col gap-2">
          <label>Job Requirements</label>
          <textarea
            required
            className="bg-gray-100 rounded-xl outline-none p-5 "
            placeholder="Enter job requirements(separate by comma)"
            rows={3}
            cols={3}
            name="requirements"
          ></textarea>
        </div>
        {/* Job Responsibilities */}
        <div className="flex flex-col gap-2">
          <label>Job Responsibilities</label>
          <textarea
            required
            className="bg-gray-100 rounded-xl outline-none p-5 "
            placeholder="Enter Job Responsibilities(separate by comma)"
            rows={3}
            cols={3}
            name="responsibilities"
          ></textarea>
        </div>
        {/* HR name */}
        <div className="flex flex-col gap-2">
          <label>HR Name</label>
          <input
            type="text"
            name="hr_name"
            id=""
            required
            className="py-3 px-5 w-full bg-gray-100 rounded-xl outline-none "
            placeholder="Enter HR Name"
          />
        </div>
        {/* HR Email */}
        <div className="flex flex-col gap-2">
          <label>HR Email</label>
          <input
            type="email"
            name="hr_email"
            id=""
            required
            className="py-3 px-5 w-full bg-gray-100 rounded-xl outline-none "
            defaultValue={user.email}
            readOnly
            placeholder="Enter HR Email"
          />
        </div>
        {/* Submit Button */}
        <div>
          <button className="py-3 w-full bg-blue-600 text-white font-semibold rounded-xl cursor-pointer">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
