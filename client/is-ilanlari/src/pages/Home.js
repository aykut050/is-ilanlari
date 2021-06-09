import React from 'react';
import Header from '../components/Header';
import AramaAlanı from '../components/AramaAlanı';
import OwlCarousel from '../components/OwlCarousel';
import Category from '../components/Category';
import İlanTür from '../components/İlanTür';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <AramaAlanı />
            {/* <OwlCarousel />
            <Category />
            <İlanTür />
            <OwlCarousel /> */}
            <Footer />
        </div>
    )
}
