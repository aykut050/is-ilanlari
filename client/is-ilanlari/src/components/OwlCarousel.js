import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OwlCarousel.css';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

export default function OwlCarousel() {
    return (
        <div className="carousel">
            <Carousel itemsToShow={5} enableAutoPlay autoPlaySpeed={1500}>
                <Link to="/İlanDetaylıBilgi"><Item>1</Item></Link>
                <Link to="/İlanDetaylıBilgi"><Item>1</Item></Link>
                <Link to="/İlanDetaylıBilgi"><Item>1</Item></Link>
                <Link to="/İlanDetaylıBilgi"><Item>1</Item></Link>
                <Link to="/İlanDetaylıBilgi"><Item>1</Item></Link>
                <Link to="/İlanDetaylıBilgi"><Item>1</Item></Link>
            </Carousel>
        </div>

    )
}
