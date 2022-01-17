import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  //How do I build this app?
  const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;

  const [ pod , setPod ] = useState({})

  useEffect(() => {
    const getPictureOfTheDay = async () => {
      const { data } = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
      setPod(data)
    }

    getPictureOfTheDay();

  }, [])

  console.log('pod-->', pod)
// Fetch data from one of NASA’s APIs and display the resulting images
  // Search results should come from https://api.nasa.gov -
  // We’ve provided screenshots below of demo apps we built using the
    // Astronomy Picture of the Day
    // Mars Rover Photos APIs (along with Shopify’s open source React component library: Polaris).

  // You are free to use any NASA API you like

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
    <div className="App">
      Hi, I';m your app
    </div>
  );
}

export default App;
