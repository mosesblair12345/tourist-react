
const Tour = ({image, date, title, info, location, duration, ammount}) => {
  const year= new Date().getFullYear();
  return (
    <article className="tour-card">
        <div className="tour-img-container">
            <img src={image} className="tour-img" alt={`${image}`} />
                <p className="tour-date">{date} {year}</p>
            </div>
            <div className="tour-info">
            <div className="tour-title">
                <h4>{title}</h4>
            </div>
            <p>
                {info}              
            </p>
             <div className="tour-footer">
                <p>
                <span><i className="fas fa-map"></i></span> {location}
                 </p>
                 <p>{duration}days </p>
                 <p>From {ammount}</p>
                 </div>
                 </div>
        </article>
  )
}
export default Tour