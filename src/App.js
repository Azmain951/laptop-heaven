import logo from './logo.svg';
import './App.css';
import Laptops from './components/Laptops/Laptops';
import Navbar from './components/Navbar/Navbar';
import Questions from './components/Questions/Questions';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Laptops></Laptops>
      <Questions></Questions>
    </div>
  );
}

export default App;
