import { Routes, Route } from "react-router-dom";
import LoginPage from "page/LoginPage";
import Home from "page/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
