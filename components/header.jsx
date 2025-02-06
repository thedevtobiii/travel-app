import globe from '../src/images/globe.png'
function Header (){
  return(
   <header>
    <img src={globe}alt="globe icon"/>  
    <h1>My Travel Journal</h1>
   </header>
  )
}
 export default Header