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
            <Link to="/AdminYaz??Payla????m" className="logo">???? ??LANLARI</Link>

            {localStorage.getItem("userData")?
            <div class="profil-ikon">
                <Link className="profil-ikon-a">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-chevron-down"></i>
                </Link>
                <div class="profil-i??indekiler">
                    <Link to="/????Alan??">???? Alan?? Gir</Link> 
                    <Link to="/????ArayanGiri??" onClick={logout}>????k???? Yap</Link>
                </div>
            </div>
            :<div className="i????i-i??veren-butonlar??">
                <div className="i??-veren">
                    <a href="#" className="i??-veren-buton">
                        <div className="isim">
                            ???? VEREN
                    </div>
                        <div className="a??a????-ok">
                            <i className="fas fa-angle-down"></i>
                        </div>
                    </a>
                    <div className="i??-veren-buton-g??r??nmeyen">
                        <Link to="/????VerenGiri??">Giri??</Link>
                        <Link to="/????Veren??yeOl">??ye Ol</Link>
                        <Link to="/AdminGiri??">Admin Giri??</Link>
                    </div>
                </div>
                <div className="i??-arayan">
                    <a href="#" className="i??-arayan-buton">
                        <div className="isim">
                            ???? ARAYAN
                    </div>
                        <div className="a??a????-ok">
                            <i className="fas fa-angle-down"></i>
                        </div>
                    </a>
                    <div className="i??-arayan-buton-g??r??nmeyen">
                        <Link to="/????ArayanGiri??">Giri??</Link>
                        <Link to="/????Arayan??yeOl">??ye Ol</Link>
                        <Link to="/AdminGiri??">Admin Giri??</Link>
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
                <a href="#">???? Veren ??ye Ol</a>
                <a href="#">???? Veren Giri?? Yap</a>
                <a href="#">???? Arayan ??ye Ol</a>
                <a href="#">???? Arayan Giri?? Yap</a>
                <a href="#">T??m ilanlar i??in t??klay??n??z</a> 
            </>:
            null}
            </Hamburger_List>
        </div>
    )
}




