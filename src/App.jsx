import React from 'react';
import Header from './components/Header';
import SlideShow from './components/SlideShow';
import Main from './components/Main';
import './reset.css';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <SlideShow />
      <Main />
      <footer
        style={{
          minWidth: '1280px',
          height: '270px',
          backgroundColor: '#333',
          marginTop: '100px',
        }}
      />
    </>
  );
}

export default App;
