/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-dupe-keys */

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './CardSlider.scss'
const data = [
    {
        place: 'Switzerland Alps',
        title: 'SAINT',
        title2: 'ANTONIEN',
        description: 'Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It\'s a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.',
        image: 'https://assets.codepen.io/3685267/timed-cards-1.jpg'
    },
    {
        place: 'Japan Alps',
        title: 'NANGANO',
        title2: 'PREFECTURE',
        description: 'Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country\'s best powder.',
        image: 'https://assets.codepen.io/3685267/timed-cards-2.jpg'
    },
    {
        place: 'Sahara Desert - Morocco',
        title: 'MARRAKECH',
        title2: 'MEROUGA',
        description: 'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
        image: 'https://assets.codepen.io/3685267/timed-cards-3.jpg'
    },
    {
        place: 'Sierra Nevada - USA',
        title: 'YOSEMITE',
        title2: 'NATIONAL PARAK',
        description: 'Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.',
        image: 'https://assets.codepen.io/3685267/timed-cards-4.jpg'
    },
    {
        place: 'Tarifa - Spain',
        title: 'LOS LANCES',
        title2: 'BEACH',
        description: 'Los Lances Beach in Tarifa is a coastal paradise known for its consistent winds, making it a world-renowned spot for kitesurfing and windsurfing. The beach\'s long, sandy shores provide ample space for relaxation and sunbathing, with a vibrant atmosphere of beach bars and cafes.',
        image: 'https://assets.codepen.io/3685267/timed-cards-5.jpg'
    },
    {
        place: 'Cappadocia - Turkey',
        title: 'Göreme',
        title2: 'Valley',
        description: 'Göreme Valley in Cappadocia is a historical marvel set against a unique geological backdrop, where centuries of wind and water have sculpted the landscape into whimsical formations. The valley is also famous for its open-air museums, underground cities, and the enchanting experience of hot air ballooning.',
        image: 'https://assets.codepen.io/3685267/timed-cards-6.jpg'
    },
];

const CardSlider = () => {
    const containerRef = useRef(null);
    const slideNumbersRef = useRef(null);
    const [order, setOrder] = useState([0, 1, 2, 3, 4, 5]);
    const [detailsEven, setDetailsEven] = useState(true);

    const range = (n) =>
        Array(n)
            .fill(0)
            .map((_, j) => j);

    const animate = (target, duration, properties) => {
        return new Promise((resolve) => {
            gsap.to(target, {
                ...properties,
                duration,
                onComplete: resolve,
            });
        });
    };

    const init = () => {
        const [active, ...rest] = order;
        const detailsActive = detailsEven ? '#details-even' : '#details-odd';
        const detailsInactive = detailsEven ? '#details-odd' : '#details-even';
        const { innerHeight: height, innerWidth: width } = window;

        const offsetTop = height - 430;
        const offsetLeft = width - 830;
        const cardWidth = 200;
        const cardHeight = 300;
        const gap = 40;
        const numberSize = 50;
        const ease = 'sine.inOut';

        gsap.set('#pagination', {
            top: offsetTop + 330,
            left: offsetLeft,
            y: 200,
            opacity: 0,
            zIndex: 60,
        });
        gsap.set('nav', { y: -200, opacity: 0 });

        gsap.set(`#card${active}`, {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        });
        gsap.set(`#card-content-${active}`, { x: 0, y: 0, opacity: 0 });
        gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
        gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
        gsap.set(`${detailsInactive} .text`, { y: 100 });
        gsap.set(`${detailsInactive} .title-1`, { y: 100 });
        gsap.set(`${detailsInactive} .title-2`, { y: 100 });
        gsap.set(`${detailsInactive} .desc`, { y: 50 });
        gsap.set(`${detailsInactive} .cta`, { y: 60 });

        gsap.set('.progress-sub-foreground', {
            width: 500 * (1 / order.length) * (active + 1),
        });

        rest.forEach((i, index) => {
            gsap.set(`#card${i}`, {
                x: offsetLeft + 400 + index * (cardWidth + gap),
                y: offsetTop,
                width: cardWidth,
                height: cardHeight,
                zIndex: 30,
                borderRadius: 10,
            });
            gsap.set(`#card-content-${i}`, {
                x: offsetLeft + 400 + index * (cardWidth + gap),
                zIndex: 40,
                y: offsetTop + cardHeight - 100,
            });
            gsap.set(`#slide-item-${i}`, { x: (index + 1) * numberSize });
        });

        gsap.set('.indicator', { x: -window.innerWidth });

        const startDelay = 0.6;

        gsap.to('.cover', {
            x: width + 400,
            delay: 2,
            ease,
            onComplete: () => {
                setTimeout(() => {
                    loop();
                }, 5000);
            },
        });
        rest.forEach((i, index) => {
            gsap.to(`#card${i}`, {
                x: offsetLeft + index * (cardWidth + gap),
                zIndex: 30,
                delay: 3 * index,
                ease,
                delay: startDelay,
            });
            gsap.to(`#card-content-${i}`, {
                x: offsetLeft + index * (cardWidth + gap),
                zIndex: 40,
                delay: 3 * index,
                ease,
                delay: startDelay,
            });
        });
        gsap.to('#pagination', { y: 0, opacity: 1, ease, delay: startDelay });
        gsap.to('nav', { y: 0, opacity: 1, ease, delay: startDelay });
        gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
    };

    const step = () => {
        return new Promise((resolve) => {
            setOrder((prevOrder) => {
                const newOrder = [...prevOrder.slice(1), prevOrder[0]];
                setDetailsEven((prevDetailsEven) => !prevDetailsEven);

                const detailsActive = detailsEven ? '#details-even' : '#details-odd';
                const detailsInactive = detailsEven ? '#details-odd' : '#details-even';

                const activeIndex = newOrder[0];

                // Check if the elements exist before manipulating them
                const activeTextElement = document.querySelector(`${detailsActive} .place-box .text`);
                const activeTitle1Element = document.querySelector(`${detailsActive} .title-1`);
                const activeTitle2Element = document.querySelector(`${detailsActive} .title-2`);
                const activeDescElement = document.querySelector(`${detailsActive} .desc`);

                if (activeTextElement) activeTextElement.textContent = data[activeIndex].place;
                if (activeTitle1Element) activeTitle1Element.textContent = data[activeIndex].title;
                if (activeTitle2Element) activeTitle2Element.textContent = data[activeIndex].title2;
                if (activeDescElement) activeDescElement.textContent = data[activeIndex].description;

                gsap.set(detailsActive, { zIndex: 22 });
                gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease: 'sine.inOut' });
                gsap.to(`${detailsActive} .text`, {
                    y: 0,
                    delay: 0.1,
                    duration: 0.7,
                    ease: 'sine.inOut',
                });
                gsap.to(`${detailsActive} .title-1`, {
                    y: 0,
                    delay: 0.15,
                    duration: 0.7,
                    ease: 'sine.inOut',
                });
                gsap.to(`${detailsActive} .title-2`, {
                    y: 0,
                    delay: 0.15,
                    duration: 0.7,
                    ease: 'sine.inOut',
                });
                gsap.to(`${detailsActive} .desc`, {
                    y: 0,
                    delay: 0.3,
                    duration: 0.4,
                    ease: 'sine.inOut',
                });
                gsap.to(`${detailsActive} .cta`, {
                    y: 0,
                    delay: 0.35,
                    duration: 0.4,
                    onComplete: resolve,
                    ease: 'sine.inOut',
                });
                gsap.set(detailsInactive, { zIndex: 12 });

                const [active, ...rest] = newOrder;
                const prv = rest[rest.length - 1];

                gsap.set(`#card${prv}`, { zIndex: 10 });
                gsap.set(`#card${active}`, { zIndex: 20 });
                gsap.to(`#card${prv}`, { scale: 1.5, ease: 'sine.inOut' });

                gsap.to(`#card-content-${active}`, {
                    y: containerRef.current.offsetTop + 300 - 10,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'sine.inOut',
                });
                gsap.to(`#slide-item-${active}`, { x: 0, ease: 'sine.inOut' });
                gsap.to(`#slide-item-${prv}`, { x: -50, ease: 'sine.inOut' });
                gsap.to('.progress-sub-foreground', {
                    width: 500 * (1 / newOrder.length) * (active + 1),
                    ease: 'sine.inOut',
                });

                gsap.to(`#card${active}`, {
                    x: 0,
                    y: 0,
                    ease: 'sine.inOut',
                    width: window.innerWidth,
                    height: window.innerHeight,
                    borderRadius: 0,
                    onComplete: () => {
                        const xNew = containerRef.current.offsetLeft + (rest.length - 1) * (200 + 40);
                        gsap.set(`#card${prv}`, {
                            x: xNew,
                            y: containerRef.current.offsetTop,
                            width: 200,
                            height: 300,
                            zIndex: 30,
                            borderRadius: 10,
                            scale: 1,
                        });

                        gsap.set(`#card-content-${prv}`, {
                            x: xNew,
                            y: containerRef.current.offsetTop + 300 - 100,
                            opacity: 1,
                            zIndex: 40,
                        });

                        resolve();
                    },
                });

                return newOrder;
            });
        });
    };



    const loop = async () => {
        await step();
        loop();
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <div ref={containerRef}>
            <div className="indicator"></div>
            <nav></nav>
            <div className="cover"></div>

            {data.map((item, index) => (
                <div
                    key={index}
                    id={`card${index}`}
                    className="card"
                    style={{ backgroundImage: `url(${item.image})` }}
                >
                    <div className="card-content" id={`card-content-${index}`}>
                        <div className="text">Slide {index + 1}</div>
                    </div>
                </div>
            ))}

            <div className="details" id="details-even">
                <div className="place-box">
                    <div className="text">Switzerland Alps</div>
                </div>
                <div className="title-box-1"><div className="title-1">SAINT</div></div>
                <div className="title-box-2"><div className="title-2">ANTONIEN</div></div>
                <div className="desc">
                    Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.
                </div>
                <div className="cta"></div>
            </div>

            <div className="details" id="details-odd">
                <div className="place-box">
                    <div className="text">Switzerland Alps</div>
                </div>
                <div className="title-box-1"><div className="title-1">SAINT </div></div>
                <div className="title-box-2"><div className="title-2">ANTONIEN</div></div>
                <div className="desc">
                    Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It's a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.
                </div>
                <div className="cta"></div>
            </div>

            <div className="pagination" id="pagination">
                <div className="arrow arrow-left">

                </div>
                <div className="arrow arrow-right">

                </div>
                <div className="progress-sub-container">
                    <div className="progress-sub-background">
                        <div className="progress-sub-foreground"></div>
                    </div>
                </div>
                <div className="slide-numbers">
                    {order.map((_, index) => (
                        <span key={index} id={`slide-item-${index}`} className="pagination-item">
                            {index + 1}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardSlider;