import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DevelopersList from "./pages/DevelopersList";
import Profile from "./pages/Profile";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DevelopersList />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
