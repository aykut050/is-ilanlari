import React from 'react';
import './İşVerenProfil.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import ŞirketBilgileri from './ŞirketBilgileri';
import ŞirketHakkında from './İşVerenHakkınızda';
import İlanVer from './İşİlanıVer';
import FaaliyetAlanı from './İşVerenFaaliyetAlanı';
import Bildirimler from './İşVerenBildirimler';
import Mesajlaşma from './Mesajlaşma';
 
export default function İşVerenProfil() {
    var userData = localStorage.getItem("userData")
    var data = JSON.parse(userData)
    console.log(data.userData.işveren_id)
    return (
        <div class="profil-sayfası">
            <div class="profil-filtreleme">
                <Link to="/İşVerenProfil/ŞirketBilgileri">Şirket Bilgileri</Link>
                <Link to="/İşVerenProfil/ŞirketHakkında">Hakkınızda</Link>
                <Link to="/İşVerenProfil/İşİlanıVer">İş İlanı Ver</Link>
                <Link to="/İşVerenProfil/FaaliyetAlanı">Faaliyet Alanı</Link>
                <Link to="/İşVerenProfil/Bildirimler">Bildirimler</Link>
            </div>
                <Switch>
                    <Route path="/İşVerenProfil/ŞirketBilgileri">
                        <ŞirketBilgileri />
                    </Route>
                    <Route path="/İşVerenProfil/ŞirketHakkında">
                        <ŞirketHakkında />
                    </Route>
                    <Route path="/İşVerenProfil/İşİlanıVer">
                        <İlanVer />
                    </Route>
                    <Route path="/İşVerenProfil/FaaliyetAlanı">
                        <FaaliyetAlanı />
                    </Route>
                    <Route path="/İşVerenProfil/Bildirimler">
                        <Bildirimler />
                    </Route>
                </Switch >

        </div>
        
        
        
    )
}
