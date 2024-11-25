import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
// import { Home } from './Components/Main/Home/Home'
import { Dashboard } from './Components/Main/DashBoard/DashBoard'
import { Home } from './Components/Main/Home/Home'
import { Menbers } from './Components/Menbers'
// import { Home } from './Components/Main Components/Commen/Home/Home'
// import { Admin } from './Components/Main Components/Admin/Admin'
// import axios from 'axios'
// import {Order} from './Components/Sub Components/Admin/Order/Order'
// import {Specific_Order} from './Components/Sub Components/Admin/Order/Specific_Order'
// import {Update_Order} from './Components/Forms/Admin/Update Order/Update_Order'

function App() {
  // axios.defaults.withCredentials=true
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>}/> 
              {/* <Route path='/admin' element={<Admin/>}>
                  <Route path='order' element={<Order/>}>
                      <Route path='more_about_order/:code' element={<Specific_Order/>}/>
                      <Route path='update_order/:code' element={<Update_Order/>}/>
                  </Route>
               </Route>  */}
               <Route path='/menber' element={<Menbers/>}/>
              <Route path='*' element={<Home/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
