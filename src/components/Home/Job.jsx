import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-lg">
        <figure>
          <img src={logo} alt="Logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <h2 className="text-gray-400 text-xl font-semibold">
            {company_name}
          </h2>
          <div className="flex gap-8">
            <button className="btn btn-outline btn-primary">
              {remote_or_onsite}
            </button>
            <button className="btn btn-outline btn-primary">{job_type}</button>
          </div>
          <div className="flex items-center mt-4">
            <p className="flex items-center">
              <CiLocationOn className="text-2xl"></CiLocationOn>
              {location}
            </p>
            <p className="flex items-center">
              <AiOutlineDollarCircle className="text-2xl"></AiOutlineDollarCircle>
              Salary : {salary}
            </p>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
