import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
				<Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
					<Route path="/" element={<Main />}></Route>
				</Routes>
			</BrowserRouter>
  );
}

export default App;
