import React, { useState, useEffect } from 'react';
import './İşVerenFaaliyetAlanı.css';
import axios from 'axios';

export default function İşVerenFaaliyetAlanı() {

    const [eleman, setEleman] = useState("");
    const [şirket, setŞirket] = useState([]);

    useEffect(async () => {
        loadBilgiler();
    }, [])
    const loadBilgiler = async () => {
        const data = localStorage.getItem("userData");
        const data1 = JSON.parse(data);
        const data2 = data1.userData.işveren_id
        const result = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/faaliyet_alanı_al.php")
        await setŞirket(result.data.faaliyet_alanı.filter(x => x.işveren_id === data2))  
        
    }

    const faaliyetAlanı = (e) => {
        const girilenEleman = e.target.value;
        setEleman(girilenEleman);
    }
    const Ekle = async () => {
        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);

        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        const eleman1 = {
            id: data1.userData.işveren_id,
            eklenen_eleman: eleman
        }
        const result = await axios.post(`http://localhost:8080/php-is-ilanlari/api/faaliyet_alanı_ekle.php`, {eleman1}, headers)
        console.log(result);
        window.location.reload();
    };
    return (
        <div class="profil-faaliyet-alanı">
            <div class="başlık">
                Şirket Faaliyet Alanı
            </div>
            <div class="profil-şirket-faaliyet-içerik">
                <div class="faaliyet-input">
                    <textarea name="faaliyetAlanı" onChange={faaliyetAlanı} id=""
                        placeholder="Şirketiniz ile alakalı madde madde iş yaptığınız alanları giriniz.
                         Kullandığınız araç veya programlama dili de olabilir"></textarea>
                </div>
                <div class="ekle-butonu">
                    <a onClick={Ekle}>Ekle</a>
                </div>
            </div>
            <div class="maddeler">
                <div class="maddeler-başlık">
                    Faaliyet Alanlarınız
                </div>
                <div class="maddeler-eleman">
                    <ul>
                        {şirket.faaliyet_alanı ? 
                         <li>
                         {şirket.faaliyet_alanı}
                             
                         </li> : şirket.map((data) => (
                                  <li>
                                    {data.faaliyet_alanı}
                                        
                                    </li>
                            ))
                        }
                        
                      
                        
                    </ul>
                </div>
                {/* <div class="maddeler-işlemler">
                    <a href="#" class="düzenle"><i class="fas fa-edit"></i>Düzenle</a>
                    <a href="#" class="sil"><i class="fas fa-trash-alt"></i>Sil</a>
                </div> */}
            </div>
        </div>
    )
}
