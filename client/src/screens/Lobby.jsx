import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";

const LobbyScreen = () => {
  const [room, setRoom] = useState("");

  const socket = useSocket();
  console.log(`Sockets : ${socket}`);
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { username, room });
    },
    [username, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className=" flex-abs-center flex-col card">
      <h1 className="heading">Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <input
          className="text-box"
          type="text"
          id="room"
          value={room}
          placeholder="Enter room id"
          onChange={(e) => setRoom(e.target.value)}
        />
        <br />
        <div className="flex-abs-center">
          <button className=" btn">Join</button>
        </div>
      </form>
    </div>
  );
};

export default LobbyScreen;
