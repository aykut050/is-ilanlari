import React, { useState, useEffect } from 'react';
import './İşVerenHakkınızda.css';
import axios from 'axios'

export default function İşVerenHakkınızda() {
    const [hakkında, setHakkında] = useState("");
    const [şirket, setŞirket] = useState([]);

    
    useEffect(async () => {
        loadBilgiler();
    },[])
    const loadBilgiler = async () => {
        const data = localStorage.getItem("userData");
        const data1 = JSON.parse(data);
        const data2 = data1.userData.işveren_id
        const result = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/şirket_bilgileri_al.php")
        await setŞirket(result.data.şirketler.find(x => x.işveren_id === data2))          
    }
    const Kaydet = async () => {

        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);

        const işveren_hakkında = {
            id: data1.userData.işveren_id,
            hakkında: hakkında
        }

        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        await axios.post(`http://localhost:8080/php-is-ilanlari/api/işveren_hakkında_yazısı.php`, { işveren_hakkında }, headers)
            .then(res => {
                console.log(res);
                console.log(res.data); 
        })
        window.location.reload();
    };

    return (
        <div class="profil-özgeçmiş-bilgisi">
            <div class="özgeçmiş-başlık">
                Şirket Hakkında
            </div>
            <div class="özgeçmiş-açıklama">
                <textarea name="hakkında" id="" placeholder={şirket.hakkında} onChange={(e) => {setHakkında(e.target.value)} }></textarea>
            </div>
            <div class="özgeçmiş-butonlar">
                <a class="Özgeçmişini-Kaydet" onClick={Kaydet}>Bilgileri Kaydet</a>
            </div>
        </div>
    )
}
