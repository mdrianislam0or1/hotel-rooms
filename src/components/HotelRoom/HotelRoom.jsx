import "./HotelRoom.css";
import { FaFemale, FaTv, FaRegCommentAlt, FaSafari, FaRestroom, FaShower } from "react-icons/fa";

const rooms = [
  {
    name: 'Double Room', price: '€89 / night',
    img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/room-full-1-720x470.jpg"
  },
  {
    name: 'Honeymoon Room', price: '€30 / night',
    img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/honeymoon-720x470.jpg"
  },
  { name: 'King Room', price: '€111 / night',
     img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/king-room-720x470.jpg" },
  { name: 'Family Room', price: '€189 / night',
     img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/1-720x470.jpg" },
  { name: 'Single Room', price: '€210 / night',
     img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/single-720x470.jpg" },
  { name: 'Deluxe Room', price: '€199 / night', 
    img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/double-720x470.jpg" },
];

function HotelRoom() {
  return (
    <div className="my-5">
      <div className="text-center">
      <h1 className="favorite__header">OUR FAVORITE ROOMS</h1>
      <p>Check out now our best rooms</p>
      </div>
      <div className="container overflow-hidden ">
      <div className="row gy-5">
        {rooms.map((room, index) => (
          <div className="col-md-4 card__border" key={index}>
            <div className="room-card">
              <div className="border">
                <img src={room.img} alt={room.name} className="img-fluid room__img" />
                <div className="room__icons">
                  <div><FaFemale /></div>
                  <div><FaRegCommentAlt /></div>
                  <div><FaSafari /></div>
                  <div><FaRestroom /></div>
                  <div><FaShower /></div>
                  <div><FaTv /></div>
                </div>
                <div className="room-info">
                  <p className="price__syle fw-bold">{room.price}</p>
                  <p className="room-name fs-5 fw-bold">{room.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default HotelRoom;
