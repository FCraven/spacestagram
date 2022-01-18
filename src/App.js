import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MenuBar
} from './components'
import {
  Home
} from './pages';
import {
  Routes,
  Route
 } from "react-router-dom";

function App() {
  // Fetch data from one of NASA’s APIs and display the resulting images
  // Search results should come from https://api.nasa.gov -
  // We’ve provided screenshots below of demo apps we built using the
    // Astronomy Picture of the Day
    // Mars Rover Photos APIs
  const [ potd , setPod ] = useState({});
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites'))||[]);
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  useEffect(() => {
    const getPotd = async () => {
      try{
        const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
        setPod(data);
      } catch(err){
          console.log('Error fetching potd-> ', err)
      }
    }

    getPotd();

  }, [])

  console.log('potd-->', potd)


//EACH CARD
// Display descriptive data for each image:
// Each image result should list:
  // a title
  // date of capture (ideally in earth_date)
  // and a button to “like” that image.
    // Each image can be “liked”
    // able to undo their “like”

// The HTML that ends up being served client-side should be accessible and semantic (MDN reference)

// Extras
  // Save likes if the user leaves or reloads the page
  // Animate the “like” action (might we suggest a heart?)
  // Add a loading state while we wait for NASA’s API to return data
  // Create shareable links for each image
  // Add a date-picker to be able to browse photos starting from a specific date
  return (
    <div className="App" >
      <MenuBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Routes>
        <Route path='/' element={ <Home potd={potd} /> }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
