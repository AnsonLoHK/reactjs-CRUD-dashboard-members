import "./App.css";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main">
          <h2 className="main-header">React Crud Operations</h2>
          <div>
            <Routes>
              <Route path="/create" element={<Create />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
