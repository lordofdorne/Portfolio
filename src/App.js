import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App" >
        <div className="container">
          <div className="row">
            <div className='col-lg-3'>

              <Sidebar />


            </div>
            <div className='col-lg-9 app-main-content'>
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
