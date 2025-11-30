import React, { use } from "react";

const ApplicationList = ({ applicationsPromise }) => {
  const applications = use(applicationsPromise);

  return (
    <div>
      {applications?.map((application) => (
        <div className="flex flex-col gap-6" key={application._id}>
          <div className="flex items-center gap-2">
            <img className="h-14 w-14" src={application.company_logo} alt="" />
            <div>
              <p>{application.title}</p>
              <p>{application.company}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationList;
