import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
