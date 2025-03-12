import React from "react";
import { useState, useEffect } from "react";
import Joblistingcard from "./Joblistingcard";
import Spinner from "./Spinner";

function Joblisting({ isHome = false }) {
  const apiUrl = isHome ? "/api/Jobs?_limit=3" : "/api/Jobs";
  const [JobsList, setJobsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setJobsList(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-100 px-4 py-10 rounded-xl">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          {loading && (
            <div className="flex justify-center items-center w-full h-40">
              <Spinner loading={loading} />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JobsList.map((job) => (
              <Joblistingcard job={job} key={job.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Joblisting;
