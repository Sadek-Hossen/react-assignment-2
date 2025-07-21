
import './App.css'
import Header from './Compunents/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Compunents/Dashboard'
import Incidents from './Compunents/Incidents'
import Activities from './Compunents/Activities'
import Documents from './Compunents/Documents'
import Cypher from './Compunents/Cypher'
import Progress from './Compunents/Progress'
import NewIncident from './Compunents/NewIncident' 
import NewIncident2 from './Compunents/NewIncident2'
import Finished from './Compunents/Finished'
function App() {

    const card = [
      {img:"/img/img1.png",
        heading:"Whitechapel Rd.",
        location:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00"
        
      },
      {img:"/img/img2.png",
        heading:"Whitechapel Rd.",
        location:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00"
        
      },
      {img:"/img/img3.png",
        heading:"Whitechapel Rd.",
        location:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00"
        
      },
      {img:"/img/img4.png",
        heading:"Tulare County.",
        location:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00"
        
      },
      {img:"/img/img5.png",
        heading:"Tulare County.",
        location:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00"
        
      },
      {img:"/img/img6.png",
        heading:"Whitechapel Rd.",
        location:"Tulare County,  Los Angles, CA 23415",
        price:"$1,456,654.00"
        
      }
    
    ]
  return (

<>
  <Header />
  <Routes>
  


    <Route path="/" element={< Dashboard card={card} />} />        
    <Route path='/Incidents' element={< Incidents card={card} />} />
    <Route path='/Activities' element={< Activities />} />
    <Route path='/Documents' element={< Documents />} />
    <Route path='/Cypher' element={< Cypher />} />
    <Route path='/Progress' element={< Progress />} />
    <Route path='/NewIncident' element={< NewIncident />} />
    <Route path='/NewIncident2' element={< NewIncident2 />} />
    <Route path='/Finished' element={< Finished />} />

    
    


  </Routes>
</>  
  )
}

export default App
