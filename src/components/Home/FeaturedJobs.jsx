import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("./jobs.json")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center my-8">
        <h1 className="text-6xl font-extrabold pb-4">Featured Jobs</h1>
        <p className="text-base text-[#757575] font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 my-8">
        {jobs.slice(0, dataLength).map(job => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <div className="text-center my-8">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-primary"
          >
            Show All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
