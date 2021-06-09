import React, { useState, useEffect } from 'react'
import './Bildirimler.css'
import user from '../images/user (1).png'
import axios from 'axios'

export default function Bildirimler() {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadBildirimler();
    }, [])
    
    const loadBildirimler = async () => {
        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);

        const result = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/bildirim_al.php")
        console.log(result.data.bildirim) 
    }

    return (
        <div class="bildirimler-alanı">
        <div class="başlık">
            Bildirimleriniz
        </div>
        <div class="elemanlar">
            <div class="eleman">
                <div class="foto">
                    <img src={user} alt="" />
                </div>
                <div class="açıklama">
                    Berkan şirketinizde çalışmak için başvurdu.
                </div>
            </div>
            <div class="eleman">
                <div class="foto">
                    <img src={user} alt="" />
                </div>
                <div class="açıklama">
                    Ali'nin şirketinizde çalışmasının 2.yılı
                </div>
            </div>
            <div class="eleman">
                <div class="foto">
                    <img src={user} alt="" />
                </div>
                <div class="açıklama">
                    İş ilanınıza 15 kişi başvurdu.
                </div>
            </div>
        </div>
    </div>
    )
}
