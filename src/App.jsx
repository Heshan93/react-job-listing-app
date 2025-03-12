import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from 'react-router-dom';
import React from "react";
import MainLayout from './Layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import NotFound from './pages/NotFound';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobPage />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
