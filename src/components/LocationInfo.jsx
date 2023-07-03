import './styles/locationinfo.css';

const LocationInfo = ({ location }) => {

  console.log(location);


  return (
    <article className="locationinfo">
      <h2 className="locationinfo_name">{location?.name} </h2>
      <ul className="locationinfo_list">
        <li className="locationinfo_item">
          <span className="locationinfo_label">Type</span>
          <span className="locationinfo_value">{location?.type}</span>
        </li>
        <li className="locationinfo_item">
          <span className="locationinfo_label">Dimension</span>
          <span className="locationinfo_value">{location?.dimension}</span>
        </li>
        <li className="locationinfo_item">
          <span className="locationinfo_label">Population</span>
          <span className="locationinfo_value">{location?.residents.length}</span>
        </li>
      </ul>
    </article >
  )
}


export default LocationInfo