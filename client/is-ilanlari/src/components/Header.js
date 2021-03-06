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
        <Redirect to={'/????ArayanGiri??'} />
    }
    const Ara = async () => {
        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        const arama = {
            searchText1: searchText
        }
        const result = await axios.post(`http://localhost:8080/php-is-ilanlari/api/??irket_??al????an_arama.php`, {arama}, headers)
        console.log(result)
        history.push({pathname: "/Arama",
                      state: result.data})
    };
    let data = localStorage.getItem("userData");
    let data1 = JSON.parse(data);
    
    return (
        
        <div className="header">
            <Link to="/" className="logo">???? ??LANLARI</Link>
            {localStorage.getItem("userData") ?
            <div className="t??m-ilanlar-ve-arama">
                <Link to="/Detayl??Arama" className="t??m-ilanlar">T??m ??lanlar i??in T??klay??n??z</Link>
                <div className="ki??i-??irket-arama">
                    <i className="fas fa-search"></i>
                    <input type="text" onChange={handleInput} onKeyPress={handleEnterKeyPressed} 
                    value={searchText} className="arama" placeholder="??irket veya ??al????an arayabilirsiniz" />
                    <button type="submit" onClick={Ara} className="arama-butonu">
                        Ara
                    </button>
                </div>
                
            </div>:null}


            {localStorage.getItem("userData") ?
            data1.userData.i????i_id ?
            <div class="profil-ikon">
                <Link className="profil-ikon-a">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-chevron-down"></i>
                </Link>
                <div class="profil-i??indekiler">
                    <Link to="/????ArayanProfil/Ki??iselBilgiler">Profil Bilgileri</Link>
                    <Link to="/????ArayanProfil/??zge??mi??">??zge??mi??</Link>
                    <Link to="/????ArayanProfil/Yetenekler">Yetenekler</Link>
                    <Link to="/????ArayanProfil/Kay??tEtti??im??lanlar">Kay??t Etti??im ??lanlar</Link>
                    <Link to="/????ArayanProfil/Bildirimler">Bildirimler</Link>
                    <Link to="/????ArayanGiri??" onClick={logout}>????k???? Yap</Link>
                </div>
            </div>:
            <div class="profil-ikon">
                <Link className="profil-ikon-a">
                    <i class="fas fa-user"></i>
                    <i class="fas fa-chevron-down"></i>
                </Link>
                <div class="profil-i??indekiler">
                    <Link to="/????VerenProfil/??irketBilgileri">Profil Bilgileri</Link>
                    <Link to="/????VerenProfil/??irketHakk??nda">Hakk??n??zda</Link>
                    <Link to="/????VerenProfil/??????lan??Ver">???? ??lan?? Ver</Link>
                    <Link to="/????VerenProfil/FaaliyetAlan??">Faaliyet Alan??</Link>
                    <Link to="/????VerenProfil/Bildirimler">Bildirimler</Link>
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
                <div className="ki??i-??irket-arama">
                    <i className="fas fa-search"></i>
                    <input type="text" onChange={handleInput} onKeyPress={handleEnterKeyPressed} 
                    value={searchText} className="arama" placeholder="??irket veya ??al????an arayabilirsiniz" />
                    <button type="submit" onClick={Ara} className="arama-butonu">
                        Ara
                    </button>
                </div>
                {data1.userData.i????i_id ?
                <>
                    <Link to="/????ArayanProfil/Ki??iselBilgiler">Profil Bilgileri</Link>
                    <Link to="/????ArayanProfil/??zge??mi??">??zge??mi??</Link>
                    <Link to="/????ArayanProfil/Yetenekler">Yetenekler</Link>
                    <Link to="/????ArayanProfil/Kay??tEtti??im??lanlar">Kay??t Etti??im ??lanlar</Link>
                    <Link to="/????ArayanProfil/Bildirimler">Bildirimler</Link>
                    <Link to="/Detayl??Arama">T??m ??lanlar</Link>
                    <Link to="/????ArayanGiri??" onClick={logout}>????k???? Yap</Link>
                </>
                :
                <>
                    <Link to="/????VerenProfil/??irketBilgileri">Profil Bilgileri</Link>
                    <Link to="/????VerenProfil/??irketHakk??nda">Hakk??n??zda</Link>
                    <Link to="/????VerenProfil/??????lan??Ver">???? ??lan?? Ver</Link>
                    <Link to="/????VerenProfil/FaaliyetAlan??">Faaliyet Alan??</Link>
                    <Link to="/????VerenProfil/Bildirimler">Bildirimler</Link>
                    <Link to="/????ArayanGiri??" onClick={logout}>????k???? Yap</Link>
                </>
                }
            </>:
            <>
                <div className="ki??i-??irket-arama">
                    <i className="fas fa-search"></i>
                    <input type="text" onChange={handleInput} onKeyPress={handleEnterKeyPressed} 
                    value={searchText} className="arama" placeholder="??irket veya ??al????an arayabilirsiniz" />
                    <button type="submit" onClick={Ara} className="arama-butonu">
                        Ara
                    </button>
                </div>
                <Link to="/????Veren??yeOl">???? Veren ??ye Ol</Link>
                <Link to="/????VerenGiri??">???? Veren Giri?? Yap</Link>
                <Link to="/????Arayan??yeOl">???? Arayan ??ye Ol</Link>
                <Link to="/????ArayanGiri??">???? Arayan Giri?? Yap</Link>
                <Link to="/Detayl??Arama">T??m ilanlar i??in t??klay??n??z</Link> 
            </>}
            </Hamburger_List>
        </div>
    )
}




