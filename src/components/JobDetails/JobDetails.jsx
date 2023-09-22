import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

  const jobs = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt);

  return (
    <div className="my-10 max-w-7xl mx-auto">
      <h1 className="text-3xl text-center font-extrabold mb-20">Job Details</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 border p-10 rounded-lg shadow-md">
          <p className="mb-6">
            <span className="font-bold">Job Description: </span>{job.job_description}
          </p>

          <p className="mb-6">
            <span className="font-bold">Job Responsibility: </span>{job.job_responsibility}
          </p>

          <p className="mb-2 font-bold">Educational Requirements:</p>
          <p className="mb-6">
           {job.educational_requirements}
          </p>

          <p className="font-bold m-2">Experiences:</p>
          <p>{job.experiences}</p>
        </div>

        <div className="col-span-1 rounded-lg">
          <div className="p-8 bg-purple-300 bg-opacity-20 rounded-lg mb-6 shadow-md">
            <h1 className="text-xl font-extrabold">Job Details</h1>
            <hr className="my-6 border" />

            <p className="mb-4">
              <span className="font-bold">Company Name :</span> {job.company_name}
            </p>

            <p className="mb-4">
              <span className="font-bold">Job Title :</span> {job.job_title}
            </p>

            <p>
              <span className="font-bold">Salary :</span> {job.salary} (Per Month)
            </p>
            
            <h1 className="text-xl font-extrabold mb-4 mt-8">Contact Information</h1>
            <hr className="border mb-4" />
            <div className="space-y-4">
            <p>
              <span className="font-bold">Phone :</span> {job.contact_information.phone}
            </p>
            <p>
              <span className="font-bold">Email :</span> {job.contact_information.email}
            </p>
            <p>
              <span className="font-bold">Address : </span>{job.contact_information.address}
            </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white w-full py-4 text-xl font-bold rounded-lg shadow-md">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
