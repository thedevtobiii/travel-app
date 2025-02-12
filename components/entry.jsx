import marker from '../src/images/marker.png'
function Entry(props){
  return(
   <article>
    
      <div className='main-image-container'>
      
      <img className='image-main' src={props.img.src} alt={props.img.alt} />
     
     
    </div>
    <div className="text-container">
    <img className='marker' src={marker} alt="marker-icon" />
    <span>{props.country}</span> 
    <a href={props.googleMapsLink}>View on Google Maps</a>
      <h1>{props.title}</h1>
      <h4>Dates: 12 Jan, 2021 - 24 Jan, 2021</h4>
      <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
    </div>

   </article>
  )
}
export default Entry