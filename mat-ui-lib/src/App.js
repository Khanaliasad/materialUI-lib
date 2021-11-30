import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Notes from "./Pages/Notes";
import Create from "./Pages/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Notes />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
