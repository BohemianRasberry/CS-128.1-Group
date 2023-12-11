import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import PageHome from './PageHome';
import PageLogin from './PageLogin';
import Userfront from "@userfront/react";

Userfront.init("demo1234");

function App() {
  function RequireAuth({ children }) {
    if (!Userfront.accessToken()) {
      // Redirect them to the /login page, but save the current location they were trying to go to
      return <Navigate to="/login" state={{ from: window.location.pathname }} replace />;
    }

    return children;
  }

  return (
    <Routes>
      <Route path="/login" element={<PageLogin />} />
      <Route path="/" element={
        <RequireAuth>
          <PageHome />
        </RequireAuth>
      } />
    </Routes>
  );
}

export default App;
