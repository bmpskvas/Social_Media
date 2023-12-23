import { useState } from "react";
import Navbar from "./components/Navbar";
import './static/LoginForm.css';
import users from './database/users.json';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from './components/Home';
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import My_Posts from "./components/My_Posts";
import Friends from "./components/Friends";
import Post from "./components/Post";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import SignUp from "./components/SignUp";
import Upload from "./components/Upload";
import { AuthProvider } from "./context/AuthContext";

const firebaseConfig = {
  apiKey: "AIzaSyBxmPeXnS7e80pXoGe_dUsqWILGtIOv-8E",
  authDomain: "react-social-media-ad554.firebaseapp.com",
  databaseURL: "https://react-social-media-ad554-default-rtdb.firebaseio.com",
  projectId: "react-social-media-ad554",
  storageBucket: "react-social-media-ad554.appspot.com",
  messagingSenderId: "617745173618",
  appId: "1:617745173618:web:e8126a5929150d617ac6eb",
  measurementId: "G-YQSXFW7581"
};
const app = initializeApp(firebaseConfig);


const App = () => {
  const uid=localStorage.getItem('user');
  
  return (
    <div className="main">
      <AuthProvider>
      <Navbar login={uid}/>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />}> </Route>
           <Route path="/home" element={<Home />}> </Route>
         <Route path="/profile" element={<Profile userid={uid}  />}></Route>
         <Route path="/myposts" element={<My_Posts />}></Route>
         <Route path="/friends" element={<Friends />}></Route>
         <Route path="/post" element={<Post />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  )
}

export default App;