import "./App.css";
import Main from "./Pages/Main";
import Progress from "./Pages/Progress";
import Success from "./Pages/Success";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
