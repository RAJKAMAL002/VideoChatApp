import { Routes, Route } from "react-router-dom";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import LoginPage from "./screens/LoginPage";
import { Login } from "./screens/Login";

function App() {
  return (
    <div className="flex-abs-center screen">
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
