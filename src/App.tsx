import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Navbar from "./components/Navbar";
import SuperheroList from "./pages/SuperHeroeList";
import SuperheroDetail from "./pages/SuperHeroeDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/" element={<Navigate to="/superheroes" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/superheroes"
              element={
                <ProtectedRoute>
                  <SuperheroList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/superheroes/:id"
              element={
                <ProtectedRoute>
                  <SuperheroDetail />
                </ProtectedRoute>
              }
            />
            <Route path="*"></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
