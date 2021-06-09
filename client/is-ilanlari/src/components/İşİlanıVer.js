import React, { useState, useEffect } from 'react';
import './İşİlanıVer.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default function İşİlanıVer() {
    const [unvan, setUnvan] = useState("")
    const [ilanAçıklama, setIlanAçıklama] = useState("")
    const [pozisyon, setPozisyon] = useState("Uzman");
    const [alan, setAlan] = useState("Web Geliştirme");

    const handleInputUnvan = (e) => {
        var text = e.target.value;
        setUnvan(text);
        console.log(unvan)
    };
    let data = localStorage.getItem("userData")
    let data1 = JSON.parse(data);
    let id1 = data1.userData.işveren_id
    const kaydet = async () => {
        const iş_ilanı = {
            id: id1,
            data: ilanAçıklama,
            unvan: unvan,
            pozisyon: pozisyon,
            alan: alan
        }
        console.log(iş_ilanı);

        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        await axios.post(`http://localhost:8080/php-is-ilanlari/api/iş_ilanı_ver.php`, { iş_ilanı }, headers)
            .then(res => {
                console.log(res);
                console.log(res.data); 
        })
        window.location.reload();
    };

         return (
        <div class="profil-ilan-ver">
            <div class="başlık">
                İş İlanı Verme Alanı
            </div>
            <div class="iş-tanımı-başlık">
                İŞ TANIMI
            </div>

                <CKEditor
                    editor={ ClassicEditor }
                    onChange={ ( e, editor ) => {
                        const data = editor.getData();
                        setIlanAçıklama(data)
                    } }
                />

                <div class="iş-tanımı-başlık">
                    İş Ünvanı
                </div>
                <input type="text" placeholder="Ünvan" name="unvan" onChange={handleInputUnvan} />
                
                <div class="iş-tanımı-başlık">
                    İşçi Pozisyon 
                </div>
                <select value={pozisyon} onChange={(e) => {setPozisyon(e.target.value)
                console.log(pozisyon);}} required>
                    <option value="Uzman">Uzman</option>
                    <option value="Stajyer">Stajyer</option>
                    <option value="Orta Seviye">Orta Seviye</option>
                    <option value="Yeni Mezun">Yeni Mezun</option>
                </select>

                <div class="iş-tanımı-başlık">
                    İş İlanı Faaliyet Alanı
                </div>
                
                <select value={alan} onChange={(e) => {setAlan(e.target.value)
                console.log(alan);}} required>
                    <option value="WebGeliştirme">Web Geliştirme</option>
                    <option value="SiberGüvenlik">Siber Güvenlik</option>
                    <option value="MobilUygulamaGeliştirme">Mobil Uygulama Geliştirme</option>
                    <option value="YazılımTesti">Yazılım Testi</option>
                </select>


            <div class="maddeler-işlemler">
                <button type="submit" class="kaydet" onClick={kaydet}><i class="fas fa-save"></i>Kaydet</button>
            </div>
        </div>
    )
    }
   
