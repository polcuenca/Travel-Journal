import './App.css'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Data from './Data'


export default function App() {
  const sections = Data.map(item=>{
    return(
      <Section
        key={item.id}
        item = {item}
      />
    )
  })

  return (
    <div className='App'>
      
     <Navbar/>
     <div className='section'>
        {sections}
        <hr/>
     </div>
     
    </div>
    
  )
}

