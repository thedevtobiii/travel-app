 import { Fragment } from "react"
 import Header from "../components/header"
 import Entry from "../components/entry"
 
 function App (){
  return(
   <>
   <Header/>
   <Entry
   img = {{
    src: "https://scrimba.com/links/travel-journal-japan-image-url",
    alt: "mountain image"
   }}
   title = "Mount Fuji"
   country = "Japan"
   googleMapsLink = "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
   /> 
   </>
  )
 }
 export default App