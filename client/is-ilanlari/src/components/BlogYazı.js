import React, { useState, useEffect } from 'react';
import './BlogYazı.css';
import user from '../images/user (1).png';
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';


export default function BlogYazı() {
    let history = useHistory();

    const [yorum, setYorum] = useState("");
    const [yazı, setYazı] = useState([])
    const [yorumlar, setYorumlar] = useState([])

    const handleInput = (e) => {
        const text = e.target.value;
        setYorum(text);
    }

    useEffect(() => {
        loadYazı();
    },[])
    const loadYazı = async () => {
        const result_Yazı = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/blog_yazıları_al.php")
            await setYazı(result_Yazı.data.tüm_yazılar.find(x=>x.yazı_id === id1))
        const result_Yorumlar = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/blog_yazı_yorumları_al.php")
        await setYorumlar(result_Yorumlar.data.yorumlar.filter(x=>x.yazı_id === id1))
    }

    const yorumYap = async () => {
        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);
        
        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        if(data1.userData.işveren_id){
            const yorum1 = {
                işveren_id: data1.userData.işveren_id,
                yorum: yorum,
                yazı_id: id1
            }
            const result = await axios.post(`http://localhost:8080/php-is-ilanlari/api/yorum_yap_işveren.php`, {yorum1}, headers)
            console.log(result)
        }
        if(data1.userData.işçi_id){
            const yorum1 = {
                işçi_id: data1.userData.işçi_id,
                yorum: yorum,
                yazı_id: id1
            }
            const result = await axios.post(`http://localhost:8080/php-is-ilanlari/api/yorum_yap_işçi.php`, {yorum1}, headers)
            console.log(result)
        }
        window.location.reload();
    };    
        let { id1 } = useParams();

    return (
        <div class="blog-yazı-sayfası-tamamı">
        <div class="sayfa-içeriği">
            <div class="sol-bölüm">
                <div class="yazının-baş-componentleri">
                    {/* <div class="yazı-fotosu">
                    <img src={user} alt="" />
                    </div> */}
                    <div class="başlık-tarih">
                        <div class="yazı-başlık">
                            <h2>{yazı.yazı_başlık}</h2>
                        </div>
                        <div class="tarih">
                            {yazı.yayın_tarihi}
                        </div>
                    </div>
                </div>
                <div class="yazı">
                    {ReactHtmlParser(yazı.yazı)}
                </div>
                <div class="yorum-alanı">
                    <div class="yorum-yapma">
                        <div class="yorum-textarea">
                        <img src={user} alt="" />
                            <textarea name="yorum" id="" onChange={handleInput} placeholder="Yorum yazabilirsiniz..." cols="55" rows="3"></textarea>
                        </div>
                        <div class="gönderme">
                            <button type="submit" onClick={yorumYap}><i class="fas fa-share"></i>Yorumu Gönder</button>
                        </div>
                    </div>
                    <div class="yorumlar">
                        { 
                         yorumlar.map((data)=> (
                            <>
                            <div class="yorum">
                                <div class="foto">
                                <img src={user} alt="" />
                                </div>
                                <div class="yorum-açıklama">
                                    {data.yorum}
                                </div>
                            </div>      
                            <hr/>                  
                            </>          
                        ))}
                   </div>
                </div>
            </div>
            {/* <div class="sağ-bölüm">
                <div class="yazılar">
                    <div class="tablo">
                        <div class="ana-başlık">
                            POPÜLER YAZILAR
                        </div>
                        <div class="diğer-yazılar">
                            <a href="#" class="eleman">
                                <div class="photo">
                                    <img src={user} alt="" />
                                </div>
                                <div class="açıklama">
                                    ASDFAAAAAAAAAAAAaaaaaaaaaaaaaaa
                                </div>
                            </a>
                            <a href="#" class="eleman">
                                <div class="photo">
                                <img src={user} alt="" />
                                </div>
                                <div class="açıklama">
                                    ASDF
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>

    </div>
    )
}
