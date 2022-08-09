import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main">
          <h2 className="main-header">React Crud Operations</h2>
          <div style={{ marginTop: 20 }}>
            <Routes>
              <Route exact path="/create" element={<Create />} />
              <Route path="/read" element={<Read />} />
              <Route path="/update" element={<Update />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
