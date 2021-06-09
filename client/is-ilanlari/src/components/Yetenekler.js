import React, { useState, useEffect } from 'react';
import './Yetenekler.css';
import axios from 'axios';

export default function Yetenekler() {
    const[yetenek, setYetenek] = useState("")   
    const [işçi, setİşçi] = useState([]);
    const [yetenekSil, setYetenekSil] = useState("");

    
    useEffect(async () => {
        loadBilgiler();
    }, [])
    const loadBilgiler = async () => {
        const data = localStorage.getItem("userData");
        const data1 = JSON.parse(data);
        const data2 = data1.userData.işçi_id
        const result = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/işçi_yetenek_al.php")
        await setİşçi(result.data.yetenekler.filter(x => x.işçi_id === data2))  
        
    }

    const Ekle = () => {
        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);

        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        const yetenek1 = {
            id: data1.userData.işçi_id,
            yetenek: yetenek
        }
        axios.post(`http://localhost:8080/php-is-ilanlari/api/işçi_yetenek.php`, { yetenek1 }, headers)
            .then(res => {
                console.log(res);
                console.log(res.data); 
        })
        window.location.reload();
    }

    
    
    return (
        <div class="profil-yetenekler">
            <div class="profil-yetenekler-başlık">
                Kişisel Beceri ve Yetenekler Alanı
            </div>
            <div class="profil-yetenekler-içerik">
                <div class="yetenek-input">
                    <input type="text" onChange={(e) => setYetenek(e.target.value)} placeholder="Yeteneğinizi girebilirsiniz" /> 
                    <a onClick={Ekle}>Ekle</a>
                </div>
                <div class="yetenekler-gösterimi">
                { <ul>
                        {işçi.yetenek ? 
                         <li>
                         {işçi.yetenek}
                             
                         </li> : işçi.map((data) => (
                                  <li>
                                    {data.yetenek}
                                        
                                    </li>
                            ))
                        }
                
                    </ul> }
                </div>
            </div>
        </div>
    )}
