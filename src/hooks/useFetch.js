import axios from "axios"
import { useState } from "react"

const useFetch = url => {

  const [resp, setresp] = useState()
  const [hasError, sethasError] = useState(false)
  const getApi = () => {
    axios.get(url)
      .then(res => {
        setresp(res.data)
        sethasError(false)
      })
      .catch(err => {
        console.log(err)
        sethasError(true)
      })
  }

  return [resp, getApi, hasError]
}

export default useFetch