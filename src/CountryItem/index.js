import './index.css'

const CountryItem = ({country, onVisit, onRemove}) => {
  const {id, name, imageUrl, isVisited} = country

  return (
    <li className="country-item">
      <img src={imageUrl} alt="thumbnail" />
      <h2>{name}</h2>
      <p>{name}</p>
      {isVisited ? (
        <>
          <p>Visited</p>
          <button type="button" onClick={() => onRemove(id)}>
            Remove
          </button>
        </>
      ) : (
        <button type="button" onClick={() => onVisit(id)}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
