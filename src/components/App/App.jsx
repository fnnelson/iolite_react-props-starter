import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';
import { CreatureList } from '../CreatureList/CreatureList.jsx';
import CreatureForm from './CreatureForm.jsx';

function App() {

  const [creatureList, setCreatureList] = useState([]);


  // Function to get the creatures from the server/database
  const fetchCreatures = () => {
    axios({
      method: 'GET',
      url: '/creature'
    })
      .then((response) => {
        console.log('Entire response:', response);
        // The actual array comes from the data attribute on the response
        console.log('Just the data:', response.data);

        // Set data into component state
        setCreatureList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }



  // Call function so it runs once on component load
  // Similar to jQuery's document ready
  useEffect(() => {
    fetchCreatures();
  }, [])

  const myHeader = "Creature Feature"

  return (
    <div className="App">

      {/* Title is the name of the property we are sending over.  myHeader is the value */}
      <Header title={myHeader} subtitle={'Fanciest Creatures in all the Land'} />

      <CreatureForm fetchCreaturesFunction={fetchCreatures} />

      <h2>All Creatures</h2>

      {/* Refactor this into its own file */}
      {/* Pas the creature details into the new component using properties */}

      <CreatureList creatureList={creatureList} />
    </div>
  );

}

export default App





