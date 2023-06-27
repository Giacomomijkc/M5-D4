import './App.css';
import React from 'react';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';
import LatestReleases from './components/LatestReleases';
import SingleBook from './components/SingleBook';
import Footer from './components/Footer'

const App = () => {
  return (
    <React.StrictMode>
      <NavigationBar/>
      <Jumbotron />
      <LatestReleases>
        <SingleBook/>
      </LatestReleases>
      <Footer />
    </React.StrictMode>
  );
}

export default App;
