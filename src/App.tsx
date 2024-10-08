import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import HomePage from "./components/pages/HomePage";


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HomePage/>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
