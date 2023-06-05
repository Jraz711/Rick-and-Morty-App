import { useRef, useState } from "react"

const InputSearch = ({ setidLocation }) => {


  const idLocationValue = useRef()

  const [inputIsEmpty, setinputIsEmpty] = useState(false)

  const searchLocation = e => {
    e.preventDefault()
    const inputValue = idLocationValue.current.value.trim()

    if (inputValue === '') {
      setinputIsEmpty(true)
      setTimeout(() => {
        setinputIsEmpty(false)
      }, 3000)
    }
    else {
      setidLocation(inputValue)
    }

    // if (inputValue !== '') {
    //   setidLocation()

    // }



  }

  return (
    <>
      <form onSubmit={searchLocation} className='input'>
        <input
          type="text"
          placeholder='Input a dimension number from 1 to 126'
          ref={idLocationValue}
        />
        <button>Search</button>
      </form>
      {
        inputIsEmpty && <h3>This FIeld is requiered. 👀</h3>
      }
    </>
  )
}

export default InputSearch