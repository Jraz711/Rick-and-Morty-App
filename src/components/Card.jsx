import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import "./styles/card.css"


const Card = ({ url }) => {

  const [resident, getApiResident] = useFetch(url)

  useEffect(() => {
    getApiResident()
  }, [])

  return (
    <article className="resident">
      <header className="resident_header">
        <img
          className="resident_img"
          src={resident?.image}
          alt="" />
        <div className="resident_status">
          <span className={`resident_cicle ${resident?.status}`}></span>
          <span className="resident_status-value">
            {resident?.status}</span>
        </div>
      </header>
      <section className="resident_body">
        <h3 className="resident_name">{resident?.name}</h3>
        <hr className="resident_hr" />
        <ul className="resident_list">
          <li className="resident_item"><span className="resident_label">Specie</span>
            <span className="resident_value">{resident?.species}</span></li>
          <li className="resident_item"><span className="resident_label">Origin</span>
            <span className="resident_value"></span>{resident?.origin.name}</li>
          <li className="resident_item"><span className="resident_label">Eppisodes Where Apperar</span>
            <span className="resident_value">{resident?.episode.length}</span></li>
        </ul>
      </section>
    </article>
  )
}

export default Card