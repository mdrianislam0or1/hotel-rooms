/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom'
import RoomList from './components/RoomList/RoomList'
import Carousel from './components/Slider/Slider'

function App() {

  return (
    <>
      <div className=''>

      </div>
      <Routes className="">
        <Route path="/" element={
          // <HotelRoom />
          <Carousel />
        } />


        <Route path="/room-list" element={<RoomList />} />


      </Routes>
    </>

  )
}

export default App
