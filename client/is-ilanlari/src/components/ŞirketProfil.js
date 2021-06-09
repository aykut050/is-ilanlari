import React, { useState, useEffect } from 'react';
import './İlanDetaylıBilgi.css'
import { Link ,useParams } from "react-router-dom";
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

export default function ŞirketProfil() {

    const [şirket, setŞirket] = useState([]);
    const [faaliyet, setFaaliyet] = useState([]);

    useEffect(() => {
        loadŞirket();
    }, [])
    const loadŞirket = async () => {
        const result = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/şirket_bilgileri_al.php")
        await setŞirket(result.data.şirketler.find(x => x.işveren_id === id))
        const result1 = await axios
        .get("http://localhost:8080/php-is-ilanlari/api/faaliyet_alanı_al.php")
        //console.log(result.data.users.find(x=>x.iş_ilanı_id === id).iş_veren_id)
        await setFaaliyet(result1.data.faaliyet_alanı.filter(x=>x.işveren_id === id))
    }

    let { id } = useParams();


    return (
        <div class="ilan-detaylı-bilgi">
            <div class="sol-bölüm">
                <div class="ilan-başlık">
                    <h6> {şirket.şirket_adı} </h6>
                </div>
                <div class="foto">
                    <img src="images/sky-690293_640.jpg" alt="" />
                </div>

                <div class="içerik">
                    <div class="şirket-bilgileri">
                        <div class="başlık">
                            Şirket Bilgileri
                        </div>
                        <div class="açıklama">
                            <div class="eleman">
                                <div class="özellik">
                                    Şirket Faaliyet Alanları
                                </div>
                                <div class="değer">
                                {faaliyet.faaliyet_alanı ?
                                        <li>
                                            {faaliyet.faaliyet_alanı}

                                        </li> : faaliyet.map((data) => (
                                            <li>
                                                {data.faaliyet_alanı} 

                                            </li>
                                        ))
                                    } 
                                </div>
                            </div>
                            <hr />


                            <div class="eleman">
                                <div class="özellik">
                                    Şirket Hakkında
                                </div>
                                <div class="değer">
                                    {şirket.hakkında}
                                </div>
                            </div>
                            <hr />

                            <div class="eleman">
                                <div class="özellik">
                                    Şirket Adresi
                                </div>
                                <div class="değer">
                                    {şirket.iş_yeri_adresi}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="iletişim-bilgileri">
                        <div class="başlık">
                            İletişim Bilgileri
                        </div>
                        <div class="açıklama">
                            <div class="eleman">
                                <div class="özellik">
                                    Telefon Numarası
                                </div>
                                <div class="değer">
                                    {şirket.telefon_numarası}
                                </div>
                            </div>
                            <hr />

                            <div class="eleman">
                                <div class="özellik">
                                    Web Sitesi
                                </div>
                                <div class="değer">
                                    {şirket.web_sitesi}
                                </div>
                            </div>
                            <hr />
                            <div class="eleman">
                                <div class="özellik">
                                    Şirket Adresi
                                </div>
                                <div class="değer">
                                    {şirket.iş_yeri_adresi}
                                </div>
                            </div>

                        </div>
                    </div>
                    {JSON.parse(localStorage.getItem("userData")).userData.işçi_id ?
                    <div class="ilan-işlemleri">
                        <div class="ilanı-kaydet">

                            <Link to={'/Mesajlaşma/' + id}>
                                Mesaj Gönder
                            </Link>
                        </div>
                    </div>:null}
                </div>
            </div>
        </div>

    )
}


