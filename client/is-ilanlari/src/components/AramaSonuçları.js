import React, { useEffect, useState } from 'react';
import './AramaSonuçları.css';
import ReactHtmlParser from 'react-html-parser';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function AramaSonuçları() {
    const location = useLocation();
    
    const [datas, setDatas] = useState([])
    const [ilanlar, setIlanlar] = useState([])
    const [ilan, setIlan] = useState([])

    useEffect(() => {        
        setDatas(location.state.ilan)
        setIlan(location.state.ilan)
        setIlanlar(location.state.ilan)
    }, [])

    return (
        <div class="sayfanın-tamamı1">
            <div class="filtreleme">
              
              <div class="filtreleme-özellikleri">
                  <div className="özellik">
                      <p>Pozisyon<i class="fas fa-sort-down"></i></p>
                  </div>
                  <div className="özellik-alt">
                          <div className="özellik">
                              <button onClick={() => setIlan(ilanlar.filter(x=>x.pozisyon === "Uzman"))}>Uzman</button>
                          </div>
                          <div className="özellik">
                              <button onClick={() => setIlan(ilanlar.filter(x=>x.pozisyon === "Stajyer"))}>Stajyer</button>
                          </div>
                          <div className="özellik">
                              <button onClick={() => setIlan(ilanlar.filter(x=>x.pozisyon === "OrtaSeviye"))}>Orta Seviye</button>
                          </div>
                          <div className="özellik">
                              <button onClick={() => setIlan(ilanlar.filter(x=>x.pozisyon === "YeniMezun"))}>Yeni Mezun</button>
                          </div>
                  </div>
                  <div className="özellik">
                      <p>İş Alanı<i class="fas fa-sort-down"></i></p>
                  </div>
                  <div className="özellik-alt">
                      <div className="özellik">
                          <button onClick={() => setIlan(ilanlar.filter(x=>x.alan === 'WebGeliştirme'))}>Web Geliştirme</button>
                      </div>
                      <div className="özellik">
                          <button onClick={() => setIlan(ilanlar.filter(x=>x.alan === "SiberGüvenlik"))}>Siber Güvenlik</button>
                      </div>
                      <div className="özellik">
                          <button onClick={() => setIlan(ilanlar.filter(x=>x.alan === "MobilUygulamaGeliştirme"))}>Mobil Uygulama Geliştirme</button>
                      </div>
                      <div className="özellik">
                          <button onClick={() => setIlan(ilanlar.filter(x=>x.alan === "YazılımTesti"))}>Yazılım Testi</button>
                      </div>
                  </div>
              </div>
              
          </div>

 
            <div class="ilanlar">
                {
                    ilan.map((data) => (
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
                                        {data.iş_yeri_adresi}
                                    </div>
                                </div>
                            </div>
                            <div class="ilan-butonlar">

                                {/* <div class="ilanı-kaydet">
                                    <a href="#">İlanı Kaydet</a>
                                </div> */}

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



