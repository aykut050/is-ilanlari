import React, { useState, useRef, useEffect } from 'react';
import './KişiselBilgiler.css';
import axios from 'axios';

export default function KişiselBilgiler() {
    const [isim, setIsım] = useState("");
    const [soyisim, setSoyİsim] = useState("");
    const [dogumTarihi, setDogumTarihi] = useState("");
    const [ePosta, setEPosta] = useState("");
    const [adres, setAdres] = useState("");
    const [işçi, setIşçi] = useState([]);

    useEffect(async () => {
        loadBilgiler();
    },[])
    const loadBilgiler = async () => {
        const data = localStorage.getItem("userData");
        const data1 = JSON.parse(data);
        const data2 = data1.userData.işçi_id
        const result = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/işçi_bilgileri_al.php")
        await setIşçi(result.data.işçiler.find(x => x.işçi_id === data2))  
        setIsım(işçi.işçi_adı)
        setSoyİsim(işçi.işçi_soyadı)
        setDogumTarihi(işçi.işçi_doğum_tarihi)
        setEPosta(işçi.işçi_eMail)
        setAdres(işçi.adres)
    }

    const kaydet = async () => {
        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);

        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        const işçi_bilgileri = {
            id: data1.userData.işçi_id,
            isim: isim,
            soyİsim: soyisim,
            dogumTarihi: dogumTarihi,
            ePosta: ePosta,
            adres: adres,
        }
        axios.post(`http://localhost:8080/php-is-ilanlari/api/işçi_bilgiler_düzenle.php`, { işçi_bilgileri }, headers)
            .then(res => {
                console.log(res);
                console.log(res.data); 
        })
        window.location.reload();

    }
        return (
            <div class="profil-içerik-bilgisi">
            <div class="başlık">
                Profil Bilgilerim
            </div>
            <div class="alanlar">
                <div class="sol-bölüm">
                    <div class="eleman">
                        <div class="eleman-ismi">
                            Ad
                        </div>
                        <div class="input-alanı">
                            <input type="text" placeholder={işçi.işçi_adı} onChange={(e) => setIsım(e.target.value)} />
                        </div>
                    </div>
                    <div class="eleman">
                        <div class="eleman-ismi">
                            Soyad
                        </div>
                        <div class="input-alanı">
                            <input type="text" placeholder={işçi.işçi_soyadı} onChange={(e) => setSoyİsim(e.target.value)}/>
                        </div>
                    </div>
                    <div class="eleman">
                        <div class="eleman-ismi">
                            Doğum Tarihi
                        </div>
                        <div class="input-alanı">
                            <input type="date" placeholder={işçi.işçi_doğum_tarihi} onChange={(e) => setDogumTarihi(e.target.value)}/>
                        </div>
                    </div>
                    <div class="eleman">
                        <div class="eleman-ismi">
                            E-posta
                        </div>
                        <div class="input-alanı">
                            <input type="email" placeholder={işçi.işçi_eMail} onChange={(e) => setEPosta(e.target.value)}/>
                        </div>
                    </div>
                    <div class="eleman">
                        <div class="eleman-ismi">
                            Adres
                        </div>
                        <div class="input-alanı">
                            <input type="text" placeholder={işçi.adres} onChange={(e) => setAdres(e.target.value)}/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="kaydet-button">
                <a onClick={kaydet}>Bilgileri Kaydet</a>
            </div>
        </div> )
    }
