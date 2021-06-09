import React, {useEffect, useState} from 'react'
import './KayıtEttiğimİlanlar.css'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

export default function Başvurular() {
    
    const [ilan, setIlan] = useState([]);

    useEffect(() => {
        loadIlanlar();
    }, [])
    const loadIlanlar = async () => {
        const data = localStorage.getItem("userData");
        const data1 = JSON.parse(data);
        const data2 = data1.userData.işçi_id
        const result = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/başvuruları_al.php")
        await setIlan(result.data.başvuru.filter(x => x.başvuran_işçi_id === data2))  
        
    }
    
    return (
        <div class="profil-kayıtlı-ilanlar">
            <div class="profil-kayıtlı-ilanlar-başlık">
                Başvurduğum İlanlar
            </div>
            <div class="profil-kayıtlı-ilanlar-içerik">
                {ilan.map((data) => (
                    <div class="kayıtlı-ilan">
                        <div class="foto">
                        </div>
                        <div class="ilan-açıklama">
                            <div class="ilanın-başlığı">
                                <h5>{data.unvan}</h5>
                            </div>
                            <div class="ilanın-açıklaması">
                                {ReactHtmlParser(data.iş_ilanı_açıklama)}
                            </div>
                        </div>
                        <div class="ilan-butonlar">
                            <div class="detaylı-gör">
                            <Link to={'/İlanDetaylıBilgi/' + data.iş_ilanı_id}>Detay Bilgi</Link>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
        </div>
    )
}
