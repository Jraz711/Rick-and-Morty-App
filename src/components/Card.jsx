import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const Card = ({ url }) => {

  const [resident, getApiResident] = useFetch(url)

  useEffect(() => {
    getApiResident()
  }, [])

  return (
    <article>
      <header>
        <img src={resident?.image} alt="" />
        <div>
          <span></span>
          <span>{resident?.status}</span>
        </div>
      </header>
      <section>
        <h3>{resident?.name}</h3>
        <ul>
          <li><span>Specie</span><span>{resident?.species}</span></li>
          <li><span>Origin</span><span></span>{resident?.origin.name}</li>
          <li><span>Eppisodes Where Apperar</span><span>{resident?.episode.length}</span></li>
        </ul>
      </section>
    </article>
  )
}

export default Card