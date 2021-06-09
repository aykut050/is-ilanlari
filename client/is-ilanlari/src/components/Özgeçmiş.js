import React, { useState, useEffect } from 'react';
import './Özgeçmiş.css';
import axios from 'axios';

export default function ÖzGeçmiş() {
    const [özGeçmiş, setÖzGeçmiş] = useState("");
    const [işçi, setİşçi] = useState([]);


    useEffect(async () => {
        loadBilgiler();
    },[])

    const loadBilgiler = async () => {
        const data = localStorage.getItem("userData");
        const data1 = JSON.parse(data);
        const data2 = data1.userData.işçi_id
        const result = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/işçi_bilgileri_al.php")
        await setİşçi(result.data.işçiler.find(x => x.işçi_id === data2))          
    }

    const kaydet = () => {

        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);

        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        const özgeçmiş = {
            id: data1.userData.işçi_id,
            özGeçmiş: özGeçmiş,
        }
        axios.post(`http://localhost:8080/php-is-ilanlari/api/işçi_özgeçmiş.php`, { özgeçmiş }, headers)
            .then(res => {
                console.log(res);
                console.log(res.data); 
        })
        window.location.reload();

    }
   
    return (
        <div class="profil-özgeçmiş-bilgisi">
            <div class="özgeçmiş-başlık">
                Özgeçmiş Bilgileri
            </div>
            <div class="özgeçmiş-açıklama">
                <textarea onChange={(e) => setÖzGeçmiş(e.target.value)} placeholder={işçi.özgeçmiş}></textarea>
            </div>
            <div class="özgeçmiş-butonlar">
                <a onClick={kaydet} class="Özgeçmişini-Kaydet">Özgeçmişini Kaydet</a>
            </div>
        </div>
    )}
