/* eslint-disable no-unused-vars */
import { Link, Route, Routes } from 'react-router-dom'
import HotelRoom from './components/HotelRoom/HotelRoom'
import RoomList from './components/RoomList/RoomList'

function App() {

  return (
    <>
      <div className=''>
        
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">HOTEL-ROOM</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/room-list">Features</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

      </div>
      <Routes className="">
        <Route path="/" element={<HotelRoom />} />
        <Route path="/room-list" element={<RoomList />} />


      </Routes>
    </>

  )
}

export default App
