import Azure from './Images/Azure.png'
import Bootstrap from './Images/Bootstrap.png'
import CSS from './Images/CSS.png'
import HTML from './Images/HTML.png'
import Javascript from './Images/Javascript.png'
import Postgres from './Images/Postgres.png'
import Rails from './Images/Rails.png'
import Reacticon from './Images/Reacticon.png'

function Home(){

 return (
  <>
   <div id='landing'>Talk to me in:</div>
   <div id='codeicons'>
       <ul>
        <li><img src={Azure} alt=''/></li>
        <li><img src={Bootstrap} alt=''/></li>
        <li><img src={CSS} alt=''/></li>
        <li><img src={HTML} alt=''/></li>
        <li><img src={Javascript} alt=''/></li>
        <li><img src={Postgres} alt=''/></li>
        <li><img src={Rails} alt=''/></li>
        <li><img src={Reacticon} alt=''/></li>
       </ul>
   </div>
  </>
 )
}

export default Home