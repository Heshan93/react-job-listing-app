import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import NotFound from "./pages/NotFound";
import Jobpage, { jobLoader } from "./components/Jobpage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import LoginPage from "./pages/LoginPage";

function App() {

  const addJob = async (newJob) => {
    const res = await fetch("/api/Jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
  
    if (!res.ok) {
      console.error("Failed to add job:", res.statusText);
      return;
    }
  
    return res.json(); // Return JSON response
  };

  const updateJob = async (updateJob) => {
    const res = await fetch(`/api/Jobs/${updateJob.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateJob),
    });
  
    if (!res.ok) {
      console.error("Failed to add job:", res.statusText);
      return;
    }
  
    return res.json(); // Return JSON response
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/Jobs/${id}`, {
      method: "DELETE",
    });
  
    if (!res.ok) {
      console.error("Failed to delete job:", res.statusText);
      return;
    }
  
    return res.json();
  };

  const authUser = async (authInfo) =>{
    
    const res = await fetch(`/api/users?email=${authInfo.email}`);

    if (!res.ok) {
      console.error("Failed to fetch user:", res.statusText);
      return;
    }

    const users = await res.json();

    if (users.length === 0){
      console.error("User not found");
      return null;
    }

    const user = users[0];
    if (user.password !== authInfo.password){
      console.error("Invalid password");
      return null;
    }

    localStorage.setItem("user", JSON.stringify(user))

    return user;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/jobs/:id" element={<Jobpage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />}  loader={jobLoader} />
        <Route path="/login" element={<LoginPage getAuthUser={authUser} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;