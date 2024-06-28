# VideoChatApplication

## Overview

VideoChatApplication is a web-based application built using React and various technologies to facilitate video communication between users. It includes features for user registration, login, lobby creation, and real-time video chat using WebRTC and Socket.io.

## Technologies Used

- *Frontend:* React, CSS
- *Backend:* Node.js, ExpressJs
- *Database:* MySQL
- *API Communication:* Axios
- *WebRTC:* For real-time peer-to-peer video communication
- *Socket.io:* For real-time event-based communication

## Features

- *User Registration and Login:* Users can register with the system and subsequently log in.
- *Lobby Creation:* Upon login, users are directed to a lobby where they can create a room ID.
- *Video Calling:* Users can initiate video calls with others by entering a room ID and connecting via WebRTC.
- *Real-time Communication:* Uses Socket.io for real-time messaging and signaling during video calls.

## Installation

1. *Clone the Repository:*
   bash
   git clone https://github.com/your_username/VideoChatApplication.git
   cd VideoChatApplication
   

2. *Install Dependencies:*
   bash
   npm install
   

3. *Set Up MySQL Database:*
   - Create a MySQL database and configure the connection in your backend code (server.js or similar).
   - Update the database credentials in the backend configuration files.

4. *Start the Application:*
   bash
   npm start
   
   This will start the frontend React application.

5. *Backend Setup :*
   - Set up your Node.js backend to handle user authentication, room creation, and WebRTC signaling.
   - Ensure backend APIs are correctly configured to interact with MySQL and provide necessary endpoints for frontend functionality.

## Usage

1. *User Registration and Login:*
   - Register a new user with a unique email and password.
   - Login with registered credentials.

2. *Lobby Interaction:*
   - After login, navigate to the lobby interface.
   - Create a new room by entering a unique room ID.

3. *Initiate Video Call:*
   - Enter the room ID of the person you want to call.
   - Initiate the call to establish a WebRTC connection.

