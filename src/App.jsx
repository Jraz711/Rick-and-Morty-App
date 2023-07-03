import { useEffect, useState } from 'react'
import './App.css'
import banner from './assets/img/banner.png'
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
      <header className='header'>
        <img className='header_img' src={banner} alt="" />
      </header>
      <div className='formulario'>
        <InputSearch
          setidLocation={setidLocation}
        />
        {
          hasError
            ? <h2 className='msg_error'>❌Hey ! you must provide an id from 1 to 126 🥲 </h2>
            : (
              <>
                <div className='location'>
                  <LocationInfo
                    location={location}
                  />
                </div>
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
    </div>
  )
}

export default App
