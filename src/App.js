import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import About from './Components/About'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
              <Route path="/" component={About} />
              <Route path="/resume" component={Resume} />
              <Route path="/projects" component={Projects} />

            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
