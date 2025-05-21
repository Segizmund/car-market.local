import React, { useEffect, useRef, useState } from "react";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(1);
    const [containerWidth, setContainerWidth] = useState(0);
    const sliderContainerRef = useRef(null);
    const sliderWrapperRef = useRef(null);

    const timerRef = useRef(null);
    const [isReady, setIsReady] = useState(false);

    // Дублируем слайды для loop-анимации
    const duplicatedSlides = [
        ...slides.slice(-1),
        ...slides,
        ...slides.slice(0, 1)
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 400); // Короткая задержка, чтобы позволить DOM прогрузиться
    }, []);

    const nextSlide = () => {
        setCurrent(prev => prev + 1);
    };

    const prevSlide = () => {
        setCurrent(prev => prev - 1);
    };

    // Сброс на начальный/конечный слайд без анимации после перехода через границы
    useEffect(() => {
        if (current === duplicatedSlides.length - 1) {
            // Если дошли до последнего дубликата (FirstSlide), прыгаем на второй по счёту (Slide1)
            setTimeout(() => {
                if (sliderWrapperRef.current) {
                    sliderWrapperRef.current.style.transition = "none";
                }
                setCurrent(1); // Возвращаемся к первому реальному слайду
            }, 500);
        } else if (current === 0) {
            // Если дошли до первого дубликата (LastSlide), прыгаем на предпоследний (последний реальный)
            setTimeout(() => {
                if (sliderWrapperRef.current) {
                    sliderWrapperRef.current.style.transition = "none";
                }
                setCurrent(duplicatedSlides.length - 2); // На последний реальный слайд
            }, 500);
        }

        // Включаем transition обратно после мгновенного перехода
        setTimeout(() => {
            if (sliderWrapperRef.current) {
                sliderWrapperRef.current.style.transition = "transform 0.5s ease-in-out";
            }
        }, 50);

    }, [current, duplicatedSlides.length]);

    // Автопрокрутка
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(nextSlide, 5000);
        return () => clearTimeout(timerRef.current);
    }, [current]);

    // Получаем ширину контейнера
    useEffect(() => {
        if (sliderContainerRef.current) {
            setContainerWidth(sliderContainerRef.current.offsetWidth);
        }

        const handleResize = () => {
            if (sliderContainerRef.current) {
                setContainerWidth(sliderContainerRef.current.offsetWidth);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!Array.isArray(slides) || slides.length <= 0) return null;

    return (
        <div style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.3s' }}>
        <section className="slider relative w-full overflow-hidden max-h-[400px]">
            {/* Контейнер со всеми слайдами */}
            <div ref={sliderContainerRef} className="overflow-hidden w-full h-full">
                <div
                    ref={sliderWrapperRef}
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${current * containerWidth}px)`,
                    }}
                >
                    {duplicatedSlides.map((slide, index) => (
                        <a
                            key={index}
                            className="min-w-full max-h-[400px] block overflow-hidden"
                            style={{ width: `${containerWidth}px` }}
                            href={slide.url}
                        >
                            <img
                                src={slide.image}
                                alt="travel image"
                                className="object-fill max-h-[400px] w-full"
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* Кнопки навигации */}
            <div
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow cursor-pointer z-10 group transition duration-300 ease-linear hover:bg-[#9456F1]"
                onClick={prevSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={'transition duration-300 ease-linear group-hover:fill-white'} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </div>

            <div
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow cursor-pointer z-10 group transition duration-300 ease-linear hover:bg-[#9456F1]"
                onClick={nextSlide}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={'transition duration-300 ease-linear group-hover:fill-white'} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </section>
        </div>
    );
};

export default ImageSlider;
