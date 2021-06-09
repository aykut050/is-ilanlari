import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

export default function Category() {
    return (
        <div className="kategorilere-göre-ilanlar">
        <div className="başlık">
            Kategorilere Göre İlanlar
        </div>
        <div className="içerikler">
            <Link to="/DetaylıArama">Bilişim</Link>
            <Link to="/DetaylıArama">Eğitim</Link>
            <Link to="/DetaylıArama">Perakende</Link>
            <Link to="/DetaylıArama">Ticaret</Link>
            <Link to="/DetaylıArama">Tekstil</Link>
            <Link to="/DetaylıArama">Gıda</Link>
            <Link to="/DetaylıArama">Otomotiv</Link>
            <Link to="/DetaylıArama">Taşımacılık</Link>
            <Link to="/DetaylıArama">Turizm</Link>
            <Link to="/DetaylıArama">Yapı</Link>
            <Link to="/DetaylıArama">Üretim</Link>
            <Link to="/DetaylıArama">Telekom</Link>
            <Link to="/DetaylıArama">Elektrik</Link>
        </div>
    </div>
    )
}
