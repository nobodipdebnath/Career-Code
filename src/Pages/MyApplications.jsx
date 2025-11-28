import React, { useEffect, useState } from "react";
import MyApplication from "../components/Application/MyApplication";
import ApplicationList from "../components/Application/ApplicationList";
import useAuth from "../Hooks/useAuth";

const MyApplications = () => {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .finally(() => setLoading(false));
  }, [user]);

  return (
    <div>
      <MyApplication />
      {loading ? (
        <p>Loading applications...</p>
      ) : (
        <ApplicationList applications={applications} />
      )}
    </div>
  );
};

export default MyApplications;

