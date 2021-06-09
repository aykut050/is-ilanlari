import React, { useEffect, useState } from 'react'
import './Arama.css'
import user from '../images/user (1).png'
import { Link, useLocation } from 'react-router-dom';


export default function Arama() {
    const location = useLocation();
    const [aramaİşçi, setAramaİşçi] = useState([]);
    const [aramaİşVeren, setAramaİşVeren] = useState([]);

    useEffect(() => {
        setAramaİşçi(location.state.sonuç_işçi)
        setAramaİşVeren(location.state.sonuç_işveren)
    })

    return (
        <div class="arama-alanı">
            <div class="arama-sonuçları">
                ARAMA SONUÇLARINIZ
            </div>
            <div class="etiketler">
                <p>Kişiler</p>
                <p>Şirketler</p>
            </div>

            <div class="sonuçlar">
                <div class="başlık">
                    Aramanıza Göre Çıkan Şirket Sonuçları
                </div>
                <div class="şirketler">
                    {aramaİşVeren.map((data) => (
                        <div class="eleman">
                            <div class="foto">
                                <img src={user} alt="" />
                            </div>
                            <div class="açıklama">
                                <div class="özellikler">
                                    <div class="isim">
                                        <Link to={'/ŞirketProfil/' + data.işveren_id} >{data.şirket_adı}</Link>
                                    </div>
                                    <div class="sektör">
                                        {data.haakkında}
                                    </div>
                                    <div class="konum">
                                        {data.iş_yeri_adresi}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="başlık">
                    Aramanıza Göre Çıkan Kişi Sonuçları
                </div>
                <div class="kişiler">
                    {aramaİşçi.map((data) => (
                        <div class="eleman">
                            <div class="foto">
                                <img src={user} alt="" />
                            </div>
                            <div class="açıklama">
                                <div class="özellikler">
                                    <div class="isim">
                                        <Link to={'/İşçiProfil/' + data.işçi_id} >{data.işçi_adı}</Link>
                                    </div>
                                    <div class="sektör">
                                        {data.özgeçmiş}
                                    </div>
                                    <div class="konum">
                                        {data.adres}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
