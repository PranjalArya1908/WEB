import React from 'react';
import Header from './components/Header';
import Pagefirst from './components/pages/pagefirst';
import Second from './components/pages/second';
import Third from './components/pages/third';
import Fourth from './components/pages/Fourth';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className='bg-orange-100' >
    
      <Pagefirst />
      <Second />
      <Third />
      <Fourth />

    </div>
  );
}
export default App;

