import React from 'react';
import './İşVerenProfil.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import KişiselBilgiler from './KişiselBilgiler';
import Özgeçmiş from './Özgeçmiş';
import Yetenekler from './Yetenekler';
import KayıtEttiğimİlanlar from './KayıtEttiğimİlanlar';
import Başvurular from './Başvurular';
import ÖzgeçmişYükle from './ÖzgeçmişYükle';

export default function İşArayanProfil() {
    var userData = localStorage.getItem("userData")
    var data = JSON.parse(userData)
    return (
        <div class="profil-sayfası">
            <div class="profil-filtreleme">
                <Link to="/İşArayanProfil/KişiselBilgiler">Kişisel Bilgiler</Link>
                <Link to="/İşArayanProfil/Özgeçmiş">Özgeçmiş</Link>
                <Link to="/İşArayanProfil/Yetenekler">Yetenekler</Link>
                <Link to="/İşArayanProfil/KayıtEttiğimİlanlar">Kayıt Ettiğim İlanlar</Link>
                <Link to="/İşArayanProfil/Başvuru">Başvurduğum İlanlar</Link>
                <Link to="/İşArayanProfil/Mesajlaşma/:id">Mesajlaşma</Link>
                <Link to="/İşArayanProfil/ÖzgeçmişYükle">Özgeçmiş Yükle</Link>

            </div>
                <Switch>
                    <Route path="/İşArayanProfil/KişiselBilgiler">
                        <KişiselBilgiler />
                    </Route>
                    <Route path="/İşArayanProfil/Özgeçmiş">
                        <Özgeçmiş />
                    </Route>
                    <Route path="/İşArayanProfil/Yetenekler">
                        <Yetenekler />
                    </Route>
                    <Route path="/İşArayanProfil/KayıtEttiğimİlanlar">
                        <KayıtEttiğimİlanlar />
                    </Route>
                    
                    <Route path="/İşArayanProfil/Başvuru">
                        <Başvurular />
                    </Route>
                    <Route path="/İşArayanProfil/ÖzgeçmişYükle">
                        <ÖzgeçmişYükle />
                    </Route>
                </Switch >

        </div>
        
        
        
    )
}
