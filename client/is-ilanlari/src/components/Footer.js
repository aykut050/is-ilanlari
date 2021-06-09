import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div class="footer">
        <div class="site-hakkında">
            <div class="başlık">
                Site Hakkında
            </div>
            <div class="elemanlar">
                <Link to="">Site nasıl kullanılır ?</Link>
                <Link to="">Hakkımızda</Link>
                <Link to="">Üyelik Sözleşmesi</Link>
                <Link to="">İletişim</Link>
                <Link to="">Soru ve Öneriler için</Link>
                <Link to="/Blog">Blog Sayfası</Link>
            </div>
        </div>
        <div class="iş-arayan">
            <div class="başlık">
                İş Arayan
            </div>
            <div class="elemanlar">
                <Link to="/İşArayanGiriş">Giriş Yap</Link>
                <Link to="">Üye Ol</Link>
                <Link to="">İş İlanları</Link>
                <Link to="">Profilim</Link>
            </div>
        </div>
        <div class="işveren">
            <div class="başlık">
                İş Veren
            </div>
            <div class="elemanlar">
                <Link to="">Giriş Yap</Link>
                <Link to="">Üye Ol</Link>
                <Link to="">Ücretsiz İş İlanı Ver</Link>
                <Link to="">Profilim</Link>
            </div>
        </div>
        <div class="sosyal-medya">
            <div class="başlık">
                Sosyal Medya
            </div>
            <div class="ikonlar">
                <Link to=""><i class="fab fa-facebook-f"></i></Link>
                <Link to=""><i class="fab fa-twitter"></i></Link>
                <Link to=""><i class="fab fa-instagram"></i></Link>
                <Link to=""><i class="fab fa-linkedin-in"></i></Link>
            </div>

        </div>
    </div> 
    )
}
