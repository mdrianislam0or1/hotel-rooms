/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import './RoomList.css';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaFemale, FaTv, FaRegCommentAlt, FaSafari, FaRestroom, FaShower } from "react-icons/fa";


const rooms = [
    {
        id: 1,
        name: 'Deluxe Room',
        price: '€199',
        img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/room-full-1-720x470.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        name: 'Single Room',
        price: '€210',
        img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/honeymoon-720x470.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 3,
        name: 'Family Room',
        price: '€189',
        img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/king-room-720x470.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 4,
        name: 'King Room',
        price: '€111',
        img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/1-720x470.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 5,
        name: 'Honeymoon Room',
        price: '€30',
        img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/single-720x470.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 6,
        name: 'Double Room',
        price: '€89',
        img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/double-720x470.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

const RoomList = () => {
    return (
        <div className="container my-5">
            {rooms.map((room) => (
                <div key={room.id} className="row py-2 align-items-center">
                    <div className="col ">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <img src={room.img} alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-4">
                                <div>
                                    <h3 className='room__title'>{room.name}</h3>
                                    <p className='room__paragraph'>{room.description}</p>

                                    <div className='roomList__icons'>
                                        <div><FaFemale /></div>
                                        <div><FaRegCommentAlt /></div>
                                        <div><FaSafari /></div>
                                        <div><FaRestroom /></div>
                                        <div><FaShower /></div>
                                        <div><FaTv /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='text-center'>
                                    <h3 className='perNight__price'>{room.price}</h3>
                                    <p className='perNight'>PER NIGHT</p>
                                    <button className='room__listButton'>Show More <FaArrowCircleRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RoomList;
