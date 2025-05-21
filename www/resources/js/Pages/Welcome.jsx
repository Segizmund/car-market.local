import { Head, Link } from '@inertiajs/react';

import ImageSlider from "@/Components/MainSlider/ImageSlider.jsx";

const Welcome = (props) => {
    const slides = props.slides
    return (
        <>
            <Head title="Главная" />
            Главная страница
            <section className={'container mx-auto'}>
                <ImageSlider slides={slides} />
            </section>
        </>
    );
}

export default Welcome;
