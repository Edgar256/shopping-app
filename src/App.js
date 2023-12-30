import { Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import PhoneSignUp from "./pages/PhoneSignUp";
import ProtectedRoute from "./pages/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <div>
      <div>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  {/* <Home /> */}
                  <Shop />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </div>
  );
}

export default App;
