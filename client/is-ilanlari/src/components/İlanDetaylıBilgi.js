import React, { useState, useEffect } from 'react';
import './İlanDetaylıBilgi.css'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

export default function İlanDetaylıBilgi() {

    const [ilan, setIlan] = useState([]);
    const [faaliyet, setFaaliyet] = useState([]);
    const [işveren, setİşveren] = useState([])

    useEffect(() => {
        loadIlan();
    }, [])
    const loadIlan = async () => {
        const result = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/iş_ilanları_al.php")
        await setIlan(result.data.users.find(x => x.iş_ilanı_id === id))
        const result1 = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/faaliyet_alanı_al.php")
            //console.log(result.data.users.find(x=>x.iş_ilanı_id === id).iş_veren_id)
            const işveren_id1 = result.data.users.find(x=>x.iş_ilanı_id === id).iş_veren_id
        await setFaaliyet(result1.data.faaliyet_alanı.filter(x=>x.işveren_id === işveren_id1))
        const result2 = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/şirket_bilgileri_al.php")
        await setİşveren(result2.data.şirketler.find(x=>x.işveren_id === işveren_id1))
    }

    const başvur = () => {
        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);

        const iş_ilanı_başvuru = {
            işçi_id: data1.userData.işçi_id,
            iş_ilanı_id: id
        }

        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }

        axios.post(`http://localhost:8080/php-is-ilanlari/api/iş_ilanı_başvur.php`, { iş_ilanı_başvuru }, headers)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            window.location.reload();

    };
    const ilanKaydet = () => {
        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);

        const iş_ilanı_kaydet = {
            işçi_id: data1.userData.işçi_id,
            iş_ilanı_id: id
        }
        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        axios.post(`http://localhost:8080/php-is-ilanlari/api/iş_ilanı_kaydet.php`, { iş_ilanı_kaydet }, headers)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            window.location.reload();

    };

    let { id } = useParams();


    return (
        <div class="ilan-detaylı-bilgi">
            <div class="sol-bölüm">
                <div class="ilan-başlık">
                    <h6> {ilan.unvan}   </h6>
                </div>
                <div class="foto">
                    <img src="images/sky-690293_640.jpg" alt="" />
                </div>

                <div class="içerik">
                    <div class="iş-tanımı">
                        <div class="başlık">
                            İş Tanımı
                        </div>
                        <div class="açıklama">
                            {ReactHtmlParser(ilan.iş_ilanı_açıklama)}
                        </div>
                    </div>
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
                                    {işveren.hakkında}
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div class="iletişim-bilgileri">
                        <div class="başlık">
                            İletişim Bilgileri
                        </div>
                        <div class="açıklama">
                            <div class="eleman">
                                <div class="özellik">
                                    Şirket Adresi
                                </div>
                                <div class="değer">
                                    {ilan.iş_yeri_adresi}
                                </div>
                            </div>
                            <hr />
                            <div class="eleman">
                                <div class="özellik">
                                    Şirket Web Sitesi
                                </div>
                                <div class="değer">
                                    {ilan.web_sitesi}
                                </div>
                            </div>
                            <hr />
                            <div class="eleman">
                                <div class="özellik">
                                    Şirket Adı
                                </div>
                                <div class="değer">
                                    {işveren.şirket_adı}
                                </div>
                            </div>
                            <hr />
                            <div class="eleman">
                                <div class="özellik">
                                    Şirket Profil Sayfası
                                </div>
                                <div class="değer">
                                    <Link to={'/ŞirketProfil/' + işveren.işveren_id}>
                                        Profile Git
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {JSON.parse(localStorage.getItem("userData")).userData.işçi_id ?
        

                    <div class="ilan-işlemleri">
                        <div class="ilanı-kaydet">
                            <button type="submit" onClick={ilanKaydet}><i class="fas fa-save"></i>İlanı Kaydet</button>
                        </div>
                        <div class="ilana-başvur">
                            <button type="submit" onClick={başvur}><i class="fas fa-share-square"></i>İlana Başvur</button>
                        </div>
                    </div>: null}
                </div>
            </div>
            {/* <div class="sağ-bölüm">
            <div class="benzer-ilanlar">
                <div class="tablo">
                    <div class="ana-başlık">
                        DİĞER BENZER İLANLAR
                    </div>
                    <div class="benzer-ilanlar-elemanları">
                        <a href="#" class="eleman">
                            <div class="photo">
                                <img src="images/office-1209640_640.jpg" alt="" />
                            </div>
                            <div class="açıklama">
                                <div class="pozisyon">
                                    Yazılım Mühendisliği
                                </div>
                                <div class="şirket">
                                    Kaer Holding
                                </div>
                            </div>
                        </a>
                        <a href="#" class="eleman">
                            <div class="photo">
                                <img src="images/office-1209640_640.jpg" alt="" />
                            </div>
                            <div class="açıklama">
                                <div class="pozisyon">
                                    Endüstri Mühendisliği
                                </div>
                                <div class="şirket">
                                    Cfr Şirket A.Ş.
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div> */}
        </div>

    )
}


