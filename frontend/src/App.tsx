import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes>
  </BrowserRouter>;
}

export default App;
