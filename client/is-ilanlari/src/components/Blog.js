import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import './Blog.css';
import img from '../images/harley-davidson-1HZcJjdtc9g-unsplash (1).jpg'
import axios from 'axios';

export default function Blog() {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        getIlan()
    }, [])

    function getIlan(){
        axios
            .get("http://localhost:8080/php-is-ilanlari/api/blog_yazıları_al.php")
            .then(({data}) => {
                if (data.success === 1) {
                    setDatas(data.tüm_yazılar)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div class="blog-sayfası-tamamı">
            <div class="üst-kısım">
                <div class="başlık">
                    Blog Sayfası
            </div>
                {/* <div class="kategoriler">
                    <div class="butonlar">
                        <a href="#">İŞ-HAYATI(8)</a>
                        <a href="#">KARİYER YOLU(9)</a>
                        <a href="#">KARİYER YOLU(9)</a>
                        <a href="#">KARİYER YOLU(9)</a>
                    </div>
                </div> */}
            </div>

            <div class="sayfa-içeriği">
                <div class="sol-bölüm">

                    <div class="yazılar">
                        { datas.map((data)=>(
                            <a class="yazı">
                                <img src={img} alt="" />
                                <Link to={'/BlogYazı/' + data.yazı_id} class="açıklama">
                                    {data.yazı_başlık}
                                </Link>
                            </a>
                        ))} 
                        
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
                                        <img src={img} alt="" />
                                    </div>
                                    <div class="açıklama">
                                        ASDFAAAAAAAAAAAAaaaaaaaaaaaaaaa
                                </div>
                                </a>
                                <a href="#" class="eleman">
                                    <div class="photo">
                                        <img src={img} alt="" />
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
