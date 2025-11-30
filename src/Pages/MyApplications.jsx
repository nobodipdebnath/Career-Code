import React, { Suspense } from "react";
import MyApplication from "../components/Application/MyApplication";
import useAuth from "../Hooks/useAuth";
import ApplicationList from "../components/Application/ApplicationList";
import useApplicationsApi from "../api/useApplicationsApi";

const MyApplications = () => {
  const { user } = useAuth();
  const {myApplicationPromise} = useApplicationsApi();

  return (
    <div>
      <MyApplication />
      <h3 className="text-4xl text-center my-10 font-semibold ">My Applications :</h3>
        <Suspense fallback={<p className="text-center">Loading...</p>}>
          <ApplicationList
            applicationsPromise={myApplicationPromise(user.email)}
          />
        </Suspense>
    </div>
  );
};

export default MyApplications;

