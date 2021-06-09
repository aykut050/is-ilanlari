import React, { useState, useEffect } from 'react';
import './DetaylıArama.css';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const FiltrelemeSayfası = styled.div`
    display: none;
    @media (min-width: 480px) and  (max-width: 991px) { 
        display: flex;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgb(201, 176, 176);
        margin-bottom: 3rem;
        transform: translateX(100%)
        transition: transform 0.3s ease-in-out;
        .filtreleme{
            background-color: #d1d1d1;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            padding: 1rem;
        }
        .filtreleme .arama-yap{
            border-radius: 5px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 20px 5px;
            justify-content: center;
            background-color: #3b3a2a;
        }
        .filtreleme .arama-yap .input{
            padding: 1rem;
            width: 100%;
            margin: 0 auto;
        }
        .filtreleme .arama-yap .input input{
            border: none;
            outline: none;
            padding: 1rem .4rem;   
            border-radius: 4px;
            font-family: 'Londrina Solid', cursive;
            margin: 0 auto;
        } 
        .filtreleme .filtreleme-özellikleri{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .filtreleme-özellikleri .özellik{
            display: flex;
            flex-direction: row;
            padding: 5px;
            align-items: center;
            justify-content: center;
        }
        .filtreleme-özellikleri .özellik label{
            margin-left: 5px;
            margin-bottom: 0;
        }
        .filtreleme .arama-yap .arama-ikonu{
            margin: 0 5px;
            padding: 15px 4px;
            color: #344547;
            border: none;
            outline: none;
            border-radius: 8px;
            font-size: 1.1rem;
            background-color: rgb(169, 156, 182);
            font-family: 'Londrina Solid', cursive;
            align-items: center;
            flex-grow: 1;
        }
        .filtreleme .arama-yap .arama-ikonu img{
            margin-right: 4px;
        }
    }
    @media screen and (max-width: 479px) {
        display: flex;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        margin-bottom: 3rem;
        background-color: rgb(201, 176, 176);
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        .filtreleme{
            background-color: #d1d1d1;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            border-radius: 5px;
            padding: 1rem;
        }
        .filtreleme .arama-yap{
            border-radius: 5px;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 20px 5px;
            justify-content: center;
            background-color: #3b3a2a;
        }
        .filtreleme .arama-yap .input{
            padding: 1rem;
            width: 100%;
            margin: 0 auto;
        }
        .filtreleme .arama-yap .input input{
            border: none;
            outline: none;
            padding: 1rem .4rem;   
            border-radius: 4px;
            font-family: 'Londrina Solid', cursive;
            margin: 0 auto;
        } 
        .filtreleme .filtreleme-özellikleri{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .filtreleme-özellikleri .özellik{
            display: flex;
            flex-direction: row;
            padding: 5px;
            align-items: center;
            justify-content: center;
        }
        .filtreleme-özellikleri .özellik label{
            margin-left: 5px;
            margin-bottom: 0;
        }
        .filtreleme .arama-yap .arama-ikonu{
            margin: 0 5px;
            padding: 15px 4px;
            color: #344547;
            border: none;
            outline: none;
            border-radius: 8px;
            font-size: 1.1rem;
            background-color: rgb(169, 156, 182);
            font-family: 'Londrina Solid', cursive;
            align-items: center;
            flex-grow: 1;
        }
        .filtreleme .arama-yap .arama-ikonu img{
            margin-right: 4px;
        }
    }    
`


export default function DetaylıArama() {

    const [datas, setDatas] = useState([])
    const [ilanlar, setIlanlar] = useState([])

    useEffect(async () => {
        await axios
            .get("http://localhost:8080/php-is-ilanlari/api/iş_ilanları_al.php")
            .then(({ data }) => {
                if (data.success === 1) {
                    setDatas(data.users)
                    setIlanlar(data.users)
                }
            })
    }, [])


    return (
        <div class="sayfanın-tamamı">
            <div class="filtreleme">
              
                <div class="filtreleme-özellikleri">
                    <div className="özellik">
                        <p>Pozisyon<i class="fas fa-sort-down"></i></p>
                    </div>
                    <div className="özellik-alt">
                            <div className="özellik">
                                <button onClick={() => setDatas(ilanlar.filter(x=>x.pozisyon === "Uzman"))}>Uzman</button>
                            </div>
                            <div className="özellik">
                                <button onClick={() => setDatas(ilanlar.filter(x=>x.pozisyon === "Stajyer"))}>Stajyer</button>
                            </div>
                            <div className="özellik">
                                <button onClick={() => setDatas(ilanlar.filter(x=>x.pozisyon === "OrtaSeviye"))}>Orta Seviye</button>
                            </div>
                            <div className="özellik">
                                <button onClick={() => setDatas(ilanlar.filter(x=>x.pozisyon === "YeniMezun"))}>Yeni Mezun</button>
                            </div>
                    </div>
                    <div className="özellik">
                        <p>İş Alanı<i class="fas fa-sort-down"></i></p>
                    </div>
                    <div className="özellik-alt">
                        <div className="özellik">
                            <button onClick={() => setDatas(ilanlar.filter(x=>x.alan === 'WebGeliştirme'))}>Web Geliştirme</button>
                        </div>
                        <div className="özellik">
                            <button onClick={() => setDatas(ilanlar.filter(x=>x.alan === "SiberGüvenlik"))}>Siber Güvenlik</button>
                        </div>
                        <div className="özellik">
                            <button onClick={() => setDatas(ilanlar.filter(x=>x.alan === "MobilUygulamaGeliştirme"))}>Mobil Uygulama Geliştirme</button>
                        </div>
                        <div className="özellik">
                            <button onClick={() => setDatas(ilanlar.filter(x=>x.alan === "YazılımTesti"))}>Yazılım Testi</button>
                        </div>
                    </div>
                </div>
                
            </div>

            <div class="ilanlar">
                {
                    datas.map((data) => (
                        <div class="ilan-card">
                            <div class="foto">
                                <img src="images/phil-desforges-ow1mML1sOi0-unsplash.jpg" alt="" />
                            </div>
                            <div class="ilan-açıklama">
                                <div class="ilanın-başlığı">
                                    <h5>{data.unvan}</h5>
                                </div>
                                <div class="ilanın-açıklaması">
                                    {ReactHtmlParser(data.iş_ilanı_açıklama)}
                                </div>
                                <div class="ilanın-yeri">
                                    <div class="ikon">
                                        <img src="images/pin (2).png" alt="" />
                                    </div>
                                    <div class="yer">
                                        İstanbul
                                    </div>
                                </div>
                            </div>
                            <div class="ilan-butonlar">
                                
                                <div class="detaylı-gör">
                                    <Link to={'/İlanDetaylıBilgi/' + data.iş_ilanı_id}>Detay Bilgi</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}