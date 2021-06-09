import React, { useState } from 'react';
import './AdminHeader.css';
import {
    useHistory, useLocation,
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'


const Hamburger_List = styled.div`
    display: none;    

    @media (min-width: 480px) and  (max-width: 991px) { 
        display: ${({ open }) => open ? 'flex' : 'none'};
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        background-color: rgb(201, 176, 176);
        padding-top: 7rem;
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'}
        transition: transform 0.3s ease-in-out;

        > * {
            margin: 0 5px;
            padding: 18px 10px;
            color: black;
            font-weight: 800;
        }
    }
    @media screen and (max-width: 479px) {
        display: ${({ open }) => open ? 'flex' : 'none'};
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        background-color: rgb(201, 176, 176);
        padding-top: 3rem;
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'}
        transition: transform 0.3s ease-in-out;

        > * {
            margin: 0 5px;
            padding: 18px 10px;
            color: black;
            font-weight: 800;
        }
    }    
` 
const Hamburger = styled.div`
    width: 2rem;
    height: 2rem;
    z-index: 20;
    display: none;
    align-items: center;

    @media (max-width: 991px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#333' : '#ccc'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        
        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)' };
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

export default function AdminHeader() {    
    const [open, setOpen] = useState(false); 

    function logout() {
        localStorage.removeItem("userData");
    }
   
    return (
        <div className="header">
            <Link to="/AdminYazıPaylaşım" className="logo">İŞ İLANLARI</Link>

            {localStorage.getItem("userData")?
            <div class="profil-ikon">
                <Link className="profil-ikon-a">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-chevron-down"></i>
                </Link>
                <div class="profil-içindekiler">
                    <Link to="/İşAlanı">İş Alanı Gir</Link> 
                    <Link to="/İşArayanGiriş" onClick={logout}>Çıkış Yap</Link>
                </div>
            </div>
            :<div className="işçi-işveren-butonları">
                <div className="iş-veren">
                    <a href="#" className="iş-veren-buton">
                        <div className="isim">
                            İŞ VEREN
                    </div>
                        <div className="aşağı-ok">
                            <i className="fas fa-angle-down"></i>
                        </div>
                    </a>
                    <div className="iş-veren-buton-görünmeyen">
                        <Link to="/İşVerenGiriş">Giriş</Link>
                        <Link to="/İşVerenÜyeOl">Üye Ol</Link>
                        <Link to="/AdminGiriş">Admin Giriş</Link>
                    </div>
                </div>
                <div className="iş-arayan">
                    <a href="#" className="iş-arayan-buton">
                        <div className="isim">
                            İŞ ARAYAN
                    </div>
                        <div className="aşağı-ok">
                            <i className="fas fa-angle-down"></i>
                        </div>
                    </a>
                    <div className="iş-arayan-buton-görünmeyen">
                        <Link to="/İşArayanGiriş">Giriş</Link>
                        <Link to="/İşArayanÜyeOl">Üye Ol</Link>
                        <Link to="/AdminGiriş">Admin Giriş</Link>
                    </div>
                </div>
            </div>
            }
            <Hamburger open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </Hamburger>
            <Hamburger_List open={open}>
            {localStorage.getItem("userData") ?
            <>
                <input type="text" placeholder="Arama yapabilirsiniz..." />
                <a href="#">İş Veren Üye Ol</a>
                <a href="#">İş Veren Giriş Yap</a>
                <a href="#">İş Arayan Üye Ol</a>
                <a href="#">İş Arayan Giriş Yap</a>
                <a href="#">Tüm ilanlar için tıklayınız</a> 
            </>:
            null}
            </Hamburger_List>
        </div>
    )
}




