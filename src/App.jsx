import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import InputSearch from './components/InputSearch'
import LocationInfo from './components/LocationInfo'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'


function App() {
  const randomId = getRandomNumber(126)

  const [idLocation, setidLocation] = useState(randomId)

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`

  const [location, getApiLocation, hasError] = useFetch(url)

  useEffect(() => {
    getApiLocation()
  }, [idLocation])

  return (
    <div className='app'>
      <h1>Rick and Morty App</h1>
      <InputSearch
        setidLocation={setidLocation}
      />
      {
        hasError
          ? <h2>❌Hey ! you must provide an id from 1 to 126 🥲 </h2>
          : (
            <>

              <LocationInfo
                location={location}
              />
              <div className='resident-container'>
                {
                  location?.residents.map(url => (
                    <Card
                      url={url}
                      key={url}
                    />
                  ))
                }
              </div>
            </>
          )
      }
    </div>
  )
}

export default App
