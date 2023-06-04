import { useRef } from "react"

const InputSearch = ({ setidLocation }) => {

  const idLocationValue = useRef()

  const searchLocation = e => {
    e.preventDefault()
    setidLocation(idLocationValue.current.value.trim())
  }

  return (
    <form onSubmit={searchLocation} className='input'>
      <input
        type="text"
        placeholder='Input a dimension number from 1 to 126'
        ref={idLocationValue}
      />
      <button>Search</button>
    </form>
  )
}

export default InputSearch