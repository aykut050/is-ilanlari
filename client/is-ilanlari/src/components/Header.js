import React, { useState } from 'react';
import './Header.css';
import {
    useHistory, useLocation,
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'


const Hamburger_List = styled.div`
    display: none;    
    overflow: scroll;
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

export default function Header() {    
    let history = useHistory();
    const [open, setOpen] = useState(false); 
    const [searchText, setSearchText] = useState("");

    const handleInput = (e) => {
        const text = e.target.value;
        setSearchText(text);
    }

    const handleEnterKeyPressed = async (e) => {
        if(e.key === "Enter"){
            await Ara();
        }
    }
    function logout() {
        localStorage.removeItem("userData");
        <Redirect to={'/İşArayanGiriş'} />
    }
    const Ara = async () => {
        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        const arama = {
            searchText1: searchText
        }
        const result = await axios.post(`http://localhost:8080/php-is-ilanlari/api/şirket_çalışan_arama.php`, {arama}, headers)
        console.log(result)
        history.push({pathname: "/Arama",
                      state: result.data})
    };
    let data = localStorage.getItem("userData");
    let data1 = JSON.parse(data);
    
    return (
        
        <div className="header">
            <Link to="/" className="logo">İŞ İLANLARI</Link>
            {localStorage.getItem("userData") ?
            <div className="tüm-ilanlar-ve-arama">
                <Link to="/DetaylıArama" className="tüm-ilanlar">Tüm İlanlar için Tıklayınız</Link>
                <div className="kişi-şirket-arama">
                    <i className="fas fa-search"></i>
                    <input type="text" onChange={handleInput} onKeyPress={handleEnterKeyPressed} 
                    value={searchText} className="arama" placeholder="Şirket veya çalışan arayabilirsiniz" />
                    <button type="submit" onClick={Ara} className="arama-butonu">
                        Ara
                    </button>
                </div>
                
            </div>:null}


            {localStorage.getItem("userData") ?
            data1.userData.işçi_id ?
            <div class="profil-ikon">
                <Link className="profil-ikon-a">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-chevron-down"></i>
                </Link>
                <div class="profil-içindekiler">
                    <Link to="/İşArayanProfil/KişiselBilgiler">Profil Bilgileri</Link>
                    <Link to="/İşArayanProfil/Özgeçmiş">Özgeçmiş</Link>
                    <Link to="/İşArayanProfil/Yetenekler">Yetenekler</Link>
                    <Link to="/İşArayanProfil/KayıtEttiğimİlanlar">Kayıt Ettiğim İlanlar</Link>
                    <Link to="/İşArayanProfil/Bildirimler">Bildirimler</Link>
                    <Link to="/İşArayanGiriş" onClick={logout}>Çıkış Yap</Link>
                </div>
            </div>:
            <div class="profil-ikon">
                <Link className="profil-ikon-a">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-chevron-down"></i>
                </Link>
                <div class="profil-içindekiler">
                    <Link to="/İşVerenProfil/ŞirketBilgileri">Profil Bilgileri</Link>
                    <Link to="/İşVerenProfil/ŞirketHakkında">Hakkınızda</Link>
                    <Link to="/İşVerenProfil/İşİlanıVer">İş İlanı Ver</Link>
                    <Link to="/İşVerenProfil/FaaliyetAlanı">Faaliyet Alanı</Link>
                    <Link to="/İşVerenProfil/Bildirimler">Bildirimler</Link>
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
                <div className="kişi-şirket-arama">
                    <i className="fas fa-search"></i>
                    <input type="text" onChange={handleInput} onKeyPress={handleEnterKeyPressed} 
                    value={searchText} className="arama" placeholder="Şirket veya çalışan arayabilirsiniz" />
                    <button type="submit" onClick={Ara} className="arama-butonu">
                        Ara
                    </button>
                </div>
                {data1.userData.işçi_id ?
                <>
                    <Link to="/İşArayanProfil/KişiselBilgiler">Profil Bilgileri</Link>
                    <Link to="/İşArayanProfil/Özgeçmiş">Özgeçmiş</Link>
                    <Link to="/İşArayanProfil/Yetenekler">Yetenekler</Link>
                    <Link to="/İşArayanProfil/KayıtEttiğimİlanlar">Kayıt Ettiğim İlanlar</Link>
                    <Link to="/İşArayanProfil/Bildirimler">Bildirimler</Link>
                    <Link to="/DetaylıArama">Tüm İlanlar</Link>
                    <Link to="/İşArayanGiriş" onClick={logout}>Çıkış Yap</Link>
                </>
                :
                <>
                    <Link to="/İşVerenProfil/ŞirketBilgileri">Profil Bilgileri</Link>
                    <Link to="/İşVerenProfil/ŞirketHakkında">Hakkınızda</Link>
                    <Link to="/İşVerenProfil/İşİlanıVer">İş İlanı Ver</Link>
                    <Link to="/İşVerenProfil/FaaliyetAlanı">Faaliyet Alanı</Link>
                    <Link to="/İşVerenProfil/Bildirimler">Bildirimler</Link>
                    <Link to="/İşArayanGiriş" onClick={logout}>Çıkış Yap</Link>
                </>
                }
            </>:
            <>
                <div className="kişi-şirket-arama">
                    <i className="fas fa-search"></i>
                    <input type="text" onChange={handleInput} onKeyPress={handleEnterKeyPressed} 
                    value={searchText} className="arama" placeholder="Şirket veya çalışan arayabilirsiniz" />
                    <button type="submit" onClick={Ara} className="arama-butonu">
                        Ara
                    </button>
                </div>
                <Link to="/İşVerenÜyeOl">İş Veren Üye Ol</Link>
                <Link to="/İşVerenGiriş">İş Veren Giriş Yap</Link>
                <Link to="/İşArayanÜyeOl">İş Arayan Üye Ol</Link>
                <Link to="/İşArayanGiriş">İş Arayan Giriş Yap</Link>
                <Link to="/DetaylıArama">Tüm ilanlar için tıklayınız</Link> 
            </>}
            </Hamburger_List>
        </div>
    )
}




