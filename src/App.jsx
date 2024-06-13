import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";
import Layout from "./components/Layout/Layout";
import Female from "./components/Female/Female";
import Male from "./components/Male/Male";
import News from "./components/News/News";
import Order from "./components/Order/Order";
import About from "./components/About/About";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="female" element={<Female />} />
          <Route path="male" element={<Male />} />
          <Route path="news" element={<News />} />
          <Route path="order" element={<Order />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
