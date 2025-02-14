import marker from '../src/images/marker.png'
function Entry(props){
  return(
   <article>
    
      <div className='main-image-container'>
      
      <img className='image-main' src={props.img.src} alt={props.img.alt} />
     
     
    </div>
    <div className="text-container text-box">
    <img className='marker' src={marker} alt="marker-icon" />
    <span>{props.country}</span> 
    <a href={props.googleMapsLink}>View on Google Maps</a>
      <h1>{props.title}</h1>
      <h4>Dates: {props.dates}</h4>
      <p>{props.text}</p>
    </div>

   </article>
  )
}
export default Entry  