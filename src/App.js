// import logo from './logo.svg';
// import './App.css';
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className="App" >
      <div className="container">
        <div className="row">
          <div className='col-lg-3'>
            <div className="app-sidebar">
              <Sidebar />

            </div>
          </div>
          <div className='col-lg-9 app-main-content'>
            main
      </div>
        </div>
      </div>
    </div>
  );
}

export default App;
