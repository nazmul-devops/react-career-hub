import { useEffect, useState } from "react";

const JobCategory = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("./categories.json")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);
  return (
    <div className="bg-white my-8 max-w-7xl mx-auto">
      <div className="text-center pb-8">
        <h1 className="text-6xl font-extrabold pb-4">Job Category List</h1>
        <p className="text-base text-[#757575] font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 my-8">
        {jobs.map(job => (
          <div
            key={job.id}
            className="flex flex-col md:flex-row lg:flex-row mb-8 justify-between space-x-6"
          >
            <div className="bg-purple-400 bg-opacity-20 p-10 rounded-lg">
              <img className="p-4" src={job.logo} alt="" />
              <h2 className="text-xl text-[#474747] font-extrabold">
                {job.category_name}
              </h2>
              <p className="text-[#A3A3A3] font-medium">{job.availability}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
