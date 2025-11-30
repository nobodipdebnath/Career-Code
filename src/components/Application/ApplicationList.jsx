import React, { use } from "react";

const ApplicationList = ({ applicationsPromise }) => {
  let applications = use(applicationsPromise);

  // ensure applications is always array
  if (!Array.isArray(applications)) applications = [];

  return (
    <div>
      {applications.length > 0 ? (
        applications.map((application) => (
          <div className="flex flex-col gap-6" key={application._id}>
            <div className="flex items-center gap-2">
              <img
                className="h-14 w-14"
                src={application.company_logo}
                alt=""
              />
              <div>
                <p>{application.title}</p>
                <p>{application.company}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 mt-6">No applications found</p>
      )}
    </div>
  );
};

export default ApplicationList;
