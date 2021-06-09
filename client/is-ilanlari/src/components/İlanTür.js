import React from 'react';
import './İlanTür.css';
import { Link } from 'react-router-dom';

export default function İlanTür() {
    return (
        <div class="ilan-türleri">
            <Link to="/DetaylıArama" class="uzman">
                Uzman
            </Link>
            <Link to="/DetaylıArama" class="işçi">
                İşçi
            </Link>
            <Link to="/DetaylıArama" class="yönetici">
                Yönetici
            </Link>
            <Link to="/DetaylıArama" class="beyaz-yaka">
                Beyaz Yaka
            </Link>
            <Link to="/DetaylıArama" class="engelli">
                Engelli
            </Link>
            <Link to="/DetaylıArama" class="stajyer">
                Stajyer
            </Link>
        </div>
    )
}
