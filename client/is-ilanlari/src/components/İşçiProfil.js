import React, { useState, useEffect } from 'react';
import './İlanDetaylıBilgi.css'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

export default function ŞirketProfil() {

    const [işçi, setİşçi] = useState([]);
    const [yetenekler, setYetenekler] = useState([]);
    useEffect(() => {
        loadİşçi();
    }, [])
    const loadİşçi = async () => {
        const result = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/işçi_bilgileri_al.php")
        await setİşçi(result.data.işçiler.find(x => x.işçi_id === id))
        const result1 = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/işçi_yetenek_al.php")
        await setYetenekler(result1.data.yetenekler)

    }

    let { id } = useParams();


    return (
        <div class="ilan-detaylı-bilgi">
            <div class="sol-bölüm">
                <div class="ilan-başlık">
                    <h6> {işçi.işçi_adı} </h6>
                </div>
                <div class="foto">
                    <img src="images/sky-690293_640.jpg" alt="" />
                </div>

                <div class="içerik">
                    <div class="şirket-bilgileri">
                        <div class="başlık">
                            İşçi Bilgileri
                        </div>
                        <div class="açıklama">
                            <div class="eleman">
                                <div class="özellik">
                                    Özgeçmişi
                                </div>
                                <div class="değer">
                                    {işçi.özgeçmiş}
                                </div>
                            </div>
                            <hr />

                            <div class="eleman">
                                <div class="özellik">
                                    Doğum Tarihi
                                <div class="değer">
                                        {işçi.işçi_doğum_tarihi}
                                    </div>
                                </div>
                                <hr />

                                <div class="eleman">
                                    <div class="özellik">
                                        Özgeçmiş Dosyası
                                </div>
                                    <div class="değer">
                                        <Link to={'/uploads/' + işçi.özgeçmiş_dosya} target="_blank" download>Download</Link>

                                    </div>
                                </div>
                                <hr />
                                <div class="eleman">
                                    <div class="özellik">
                                        İşçi Yetenekleri
                                        
                                        {yetenekler.map((data) => (
                                            <div class="değer">
                                                {data.yetenek}, 
                                            </div>
                                        ))}

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
                                        E-Mail
                                </div>
                                    <div class="değer">
                                        {işçi.eMail}
                                    </div>
                                </div>
                                <hr />

                                <div class="eleman">
                                    <div class="özellik">
                                        Adresi
                                </div>
                                    <div class="değer">
                                        {işçi.adres}
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>

                    </div>
                    <div class="ilan-işlemleri">
                        <div class="ilanı-kaydet">

                            <Link to={'/Mesajlaşma/' + id}>
                                Mesaj Gönder
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


