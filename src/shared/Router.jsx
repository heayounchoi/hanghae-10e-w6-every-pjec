import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Post from '../pages/Post';
import PostDetail from '../pages/PostDetail';
import PostUpload from '../pages/PostUpload';
import Profile from '../pages/Profile';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import BookMark from '../pages/BookMark';
import Header from './Header';
import { useSelector } from 'react-redux';

const Router = () => {
  const { user, isLogined } = useSelector(state => state.user);
  return (
    <BrowserRouter>
      <Header user={user} isLogined={isLogined} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post" element={<Post />} />
        <Route path="postdetail/:id" element={<PostDetail />} />
        <Route path="postupload" element={isLogined ? <PostUpload /> : <Navigate to="/" />} />
        <Route path="profile" element={isLogined ? <Profile /> : <Navigate to="/" />} />
        <Route path="signin" element={!isLogined ? <Signin /> : <Navigate to="/" />} />
        <Route path="signup" element={!isLogined ? <Signup /> : <Navigate to="/" />} />
        <Route path="bookmark" element={isLogined ? <BookMark /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
