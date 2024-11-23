import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Java from "./pages/Java";
import Cpp from "./pages/Cpp";
import Python from "./pages/Python";
import Oops from "./pages/Oops";
import Gpt from "./pages/Gpt";
import { useAuth, AuthProvider } from "./context/AuthContext";
import ContextProvider from "./context/Context"; // Import your context provider

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/signup" />;
};

const App = () => {
  return (
    <AuthProvider>
      <ContextProvider>
        <Router>
          <Navbar />
          <Routes>

            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            
            <Route
              path="/home/*"
              element={
                <PrivateRoute>
                  <>

                    <SubNavbar />
                    <Routes>
                      <Route index element={<Home />} /> {/* Default route for /home */}
                      <Route path="java" element={<Java />} />
                      <Route path="cpp" element={<Cpp />} />
                      <Route path="python" element={<Python />} />
                      <Route path="oops" element={<Oops />} />
                    </Routes>

                  </>
                </PrivateRoute>
              }
            />

            <Route
              path="/gpt"
              element={
                <PrivateRoute>
                  <Gpt />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/signup" />} />

          </Routes>
        </Router>
      </ContextProvider>
    </AuthProvider>
  );
};

export default App;
