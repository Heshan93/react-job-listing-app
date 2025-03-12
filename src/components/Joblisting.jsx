import React from "react";
import jobs from "../jobs.json"
import Joblistingcard from "./Joblistingcard";



function Joblisting({isHome = false}) {

  const JobsList = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <div>
      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-100 px-4 py-10 rounded-xl">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {JobsList.map((job) => ( <Joblistingcard job={job} key={job.id} /> ))}

          </div>
        </div>
      </section>
    </div>
  );
}

export default Joblisting;
