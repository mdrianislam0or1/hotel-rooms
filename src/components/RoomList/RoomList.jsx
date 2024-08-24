/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import './RoomList.css';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaFemale, FaTv, FaRegCommentAlt, FaSafari, FaRestroom, FaShower } from "react-icons/fa";


const rooms = [
    {
        id: 1,
        name: 'Deluxe Room',
        price: '199',
        img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/room-full-1-720x470.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    },
    {
        id: 2,
        name: 'Single Room',
        price: '210',
        img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/honeymoon-720x470.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    },
    {
        id: 3,
        name: 'Family Room',
        price: '189',
        img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/king-room-720x470.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    },
    {
        id: 4,
        name: 'King Room',
        price: '111',
        img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/1-720x470.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    },
    {
        id: 5,
        name: 'Honeymoon Room',
        price: '30',
        img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/single-720x470.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    },
    {
        id: 6,
        name: 'Double Room',
        price: '89',
        img: "https://demo.zantetheme.com/wp-content/uploads/2018/05/double-720x470.jpg",
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.',
    },
];

const RoomList = () => {
    return (
        <div style={{ marginTop: "30px" }} className="custom__container">
            {rooms.map((room) => (
                <div key={room.id} className="room__list">
                    <div className=" ">
                        <div className="room__list__grid">
                            <figure className="slide-right-hover">
                                <a href="/room-list">
                                    <img src={room.img} alt="" className='' />

                                </a>
                            </figure>
                            <div className="">
                                <div className='room__details'>
                                    <a href='/room-list' className='title'>{room.name}</a>
                                    <p className=''>{room.description}</p>

                                    <div className='room__services'>
                                        <div className='room__services__item'><FaFemale /></div>
                                        <div className='room__services__item'><FaRegCommentAlt /></div>
                                        <div className='room__services__item'><FaSafari /></div>
                                        <div className='room__services__item'><FaRestroom /></div>
                                        <div className='room__services__item'><FaShower /></div>
                                        <div className='room__services__item'><FaTv /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="room__price__details ">
                                <div className=''>
                                    <strong>
                                        <span className='price_icon'>€</span>
                                        <span className='price__amount'>{room.price}</span>
                                    </strong>
                                    <p>PER NIGHT</p>
                                    <button className='room__listButton'>
                                        <div className='btn_flex'>
                                            <div>
                                                Show More
                                            </div>
                                            <div className='room__list__btn__icon'>
                                                <FaArrowCircleRight />
                                            </div>
                                        </div>

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
