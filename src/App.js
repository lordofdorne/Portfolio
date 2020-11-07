import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import About from './Components/About'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

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
              <AnimatePresence exitBeforeEnter>
                <Switch >
                  <Route exact path="/" component={About} />
                  <Route path="/resume" component={Resume} />
                  <Route path="/projects" component={Projects} />
                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
