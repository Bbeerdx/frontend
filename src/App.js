import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register.js";
// import UploadResume from './components/UploadResume';
// import ReviewResumes from './components/ReviewResumes';
// import ViewReviews from './components/ViewReviews'; // Import the new component
// import ProtectedRoute from './components/ProtectedRoute';
import Home from "./components/Home.js";
// import MyResumes from './components/myResumes';
// import ExpertDashboard from './components/ExpertDashboard.js';
// import StudentDashboard from './components/StudentDashboard.js';
import { AuthProvider } from "./components/AuthContext.js";
// import ResumeViewer from './components/ResumeViewer';
import MainMap from "./components/MainMap.js";
import MapPage from "./components/MapPage.js";
import AnalyticsPage from "./components/AnalyticsPage.js";
import ResMap from "./components/ResMap.js";
import JoinUs from "./components/JoinUs";
import LoginVol from "./components/LoginVolunteer.js";
import VolunteerDashboard from "./components/VolunteerDashboard.js";
import VolunteerGuide from "./components/VolunteerGuide.js";
import SafetyGuide from "./components/SafetyGuide .js";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mainMap" element={<MainMap />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/mainMap/analytics" element={<AnalyticsPage />} />
          <Route path="/resMap" element={<ResMap />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/loginVol" element={<LoginVol />} />
          <Route path="/volunteerDashboard" element={<VolunteerDashboard />} />
          <Route path="/volunteerGuide" element={<VolunteerGuide />} />
          <Route path="/safetyGuide" element={<SafetyGuide />} />
          {/* <Route path="/upload" element={<UploadResume />} />
                    <Route path="/reviews" element={<ReviewResumes />} />
                    <Route path="/my-reviews" element={<ViewReviews />} /> {/* Add the new route */}
          {/* Add more routes as needed */}
          {/* <Route path="/resume/:filename/:username" element={<ResumeViewer />} />
                    <Route path="/myresumes" element={<MyResumes />} />
                    <Route path="/ExpertDashboard" element={<ExpertDashboard />} />
                    <Route path='/StudentDashboard' element={<StudentDashboard />}></Route> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
