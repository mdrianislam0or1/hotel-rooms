import "./HotelRoom.css";
// import { FaFemale, FaTv, FaRegCommentAlt, FaSafari, FaRestroom, FaShower } from "react-icons/fa";

const rooms = [
  {
    name: 'Double Room', price: '€89 / night',
    img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/room-full-1-720x470.jpg"
  },
  {
    name: 'Honeymoon Room', price: '€30 / night',
    img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/honeymoon-720x470.jpg"
  },
  {
    name: 'King Room', price: '€111 / night',
    img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/king-room-720x470.jpg"
  },
  {
    name: 'Family Room', price: '€189 / night',
    img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/1-720x470.jpg"
  },
  {
    name: 'Single Room', price: '€210 / night',
    img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/single-720x470.jpg"
  },
  {
    name: 'Deluxe Room', price: '€199 / night',
    img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/double-720x470.jpg"
  },
];

function HotelRoom() {
  return (
    <div className="
    custom__container
    my-5">
      <div className="favorite__header">
        <h1 className="">OUR FAVORITE ROOMS</h1>
        <p>Check out now our best rooms</p>
      </div>

      <div className="rooms__row">
        {rooms.map((room, index) => (
          <div className=" room__item" key={index}>
            <div className="room-card">
              <div className="">
                <img src={room.img} alt={room.name} className=" room__img" />
                {/* <div className="room__icons">
                  <div><FaFemale /></div>
                  <div><FaRegCommentAlt /></div>
                  <div><FaSafari /></div>
                  <div><FaRestroom /></div>
                  <div><FaShower /></div>
                  <div><FaTv /></div>
                </div> */}
                <div className="room-info">
                  <strong>
                  <p className="price__syle">{room.price}</p>
                  <h1 className="room-name ">{room.name}</h1>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default HotelRoom;
