import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Login from './pages/Login';
import CreatePost from "./pages/CreatePost";
import User from './pages/User'
import Header from '../src/components/Header/Header'
import Home from './pages/Home';
import Register from './pages/Register'
import CreateSubcast from "./pages/CreateSubcast";
import PostDetails from "./components/Posts/PostDetails";

function App(){
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/create-post" element={<CreatePost/>} />
          <Route path="/create-subcast" element={<CreateSubcast/>} />
          <Route path="/post/:id" element={<PostDetails/>} />
          <Route path="/u/:userId" element={<User/>} />
        </Routes>
      </Router>
    </>
  )
}
export default App
