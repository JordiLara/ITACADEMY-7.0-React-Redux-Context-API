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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/superheroes" replace />} 
            />
            <Route path="/superheroes" element={<SuperheroList />} />
            <Route path="/superheroes/:id" element={<SuperheroDetail />} />
            <Route path="*"></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
