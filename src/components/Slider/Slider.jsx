import { useState, useEffect, useRef } from 'react';
import './Slider.css';
import { data } from '../../Json/data';

export default function Slider() {
    const [items, setItems] = useState(data);
    const carouselRef = useRef(null);
    const runningTimeRef = useRef(null);

    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const showSlider = (type) => {
        const list = [...items];
        if (type === 'next') {
            list.push(list.shift()); // Move the first item to the end
        } else {
            list.unshift(list.pop()); // Move the last item to the beginning
        }
        setItems(list);

        if (carouselRef.current) {
            carouselRef.current.classList.add(type);

            setTimeout(() => {
                carouselRef.current.classList.remove('next', 'prev');
            }, timeRunning);
        }

        resetTimeAnimation(); // Reset the running time animation
    };

    const resetTimeAnimation = () => {
        if (runningTimeRef.current) {
            runningTimeRef.current.style.animation = 'none';
            // Trigger reflow
            runningTimeRef.current.offsetHeight;
            runningTimeRef.current.style.animation = `runningTime ${timeAutoNext}ms linear 1 forwards`;
        }
    };

    useEffect(() => {
        const runNextAuto = setInterval(() => {
            showSlider('next');
        }, timeAutoNext);

        return () => clearInterval(runNextAuto);
    }, [items]);

    return (
        <div>
            <header>
                <nav>
                    <span href="#" className="active">Home</span>
                </nav>
            </header>

            <div className="carousel" ref={carouselRef}>
                <div className="list">
                    {items.map((item, index) => (
                        <div key={index} className="item" style={{ backgroundImage: `url(${item.image})` }}>
                            <div className="content">
                                <div className="title">{item.title}</div>
                                <div className="name">{item.title2}</div>
                                <div className="des">{item.description}</div>
                                <div className="btn">
                                    <button>See More</button>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="arrows">
                    <button className="prev" onClick={() => showSlider('prev')}>
                        &lt;
                    </button>
                    <button className="next" onClick={() => showSlider('next')}>
                        &gt;
                    </button>
                </div>

                <div className="timeRunning" ref={runningTimeRef}></div>
            </div>
        </div>
    );
}
