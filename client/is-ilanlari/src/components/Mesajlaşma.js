import React, { useState, useEffect } from 'react';
import './Mesajlaşma.css';
import user from '../images/user (1).png';
import {
    useHistory, useLocation,
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useParams,
    Redirect
} from 'react-router-dom';
import axios from 'axios';


export default function Mesajlaşma() {
    const [işçi, setIşçi] = useState([]);
    const [işveren, setIşveren] = useState([]);
    const [tümİşveren, setTümİşveren] = useState([]);
    const [tümİşçi, setTümİşçi] = useState([]);

    //Mesajı sen mi gönderdin yoksa o mu kontrolü için useStateler
    const [sen, setSen] = useState(false);
    const [karşıTaraf, setKarşıTaraf] = useState(false);

    const [mevcutİşveren, setMevcutİşveren] = useState([]);
    const [mevcutİşçi, setMevcutİşçi] = useState([]);

    const [message, setMessage] = useState('');
    
    let { id } = useParams();
    const [mesajlar1,setMesajlar1] = useState([]);

    useEffect(async () => {
        if (!localStorage.getItem('userData')) {
            return (<Redirect to={'/İşArayanGiriş'} />)
        }
        else {
            await setInterval(() => {
            loadMesajlar();
        }, 1000);
        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);
        
        if(data1.userData.işveren_id){
            const şirket_verileri = await axios
                .get("http://localhost:8080/php-is-ilanlari/api/şirket_bilgileri_al.php")
                setMevcutİşveren(şirket_verileri.data.şirketler.find(x => x.işveren_id === data1.userData.işveren_id))
        }
        if(data1.userData.işçi_id) {
            const işçi_verileri = await axios
                .get("http://localhost:8080/php-is-ilanlari/api/işçi_bilgileri_al.php")
                setMevcutİşçi(işçi_verileri.data.işçiler.find(x => x.işçi_id === data1.userData.işçi_id))
        }
        // gönderen işçi id'si varsa
        
        }
        
    }, [])
    const loadMesajlar = async () => {
        if (!localStorage.getItem('userData')) {
            return (<Redirect to={'/İşArayanGiriş'} />)
        } else {
              let data = localStorage.getItem("userData");
            let data1 = JSON.parse(data);

            if(data1.userData.işveren_id){
                const result = await axios
                    .get("http://localhost:8080/php-is-ilanlari/api/mesajları_al.php")
                // await setMesajlarGiden(result.data.mesajlar.filter(x=>x.alıcı_işçi_id === id && x.gönderen_işveren_id === data1.userData.işveren_id))
                // await setMesajlarGelen(result.data.mesajlar.filter(x=>x.alıcı_işveren_id === data1.userData.işveren_id && x.gönderen_işçi_id === id))
                await setMesajlar1(result.data.mesajlar.filter(x=> (x.alıcı_işçi_id === id && x.gönderen_işveren_id === data1.userData.işveren_id) || (x.alıcı_işveren_id === data1.userData.işveren_id && x.gönderen_işçi_id === id) ))  
                await setIşçi(result.data.işçi.find(x=>x.işçi_id === id))
                await setTümİşveren(result.data.işveren)
                await setTümİşçi(result.data.işçi)
            }
            else {
                const result = await axios
                    .get("http://localhost:8080/php-is-ilanlari/api/mesajları_al.php")
                // await setMesajlarGiden(result.data.mesajlar.filter(x=>x.alıcı_işveren_id === id && x.gönderen_işçi_id === data1.userData.işçi_id))  
                // await setMesajlarGelen(result.data.mesajlar.filter(x=>x.alıcı_işçi_id === data1.userData.işçi_id && x.gönderen_işveren_id === id))  
                await setMesajlar1(result.data.mesajlar.filter(x => (x.alıcı_işveren_id === id && x.gönderen_işçi_id === data1.userData.işçi_id) || (x.alıcı_işçi_id === data1.userData.işçi_id && x.gönderen_işveren_id === id)))  
                await setIşveren(result.data.işveren.find(x=>x.işveren_id === id))
                await setTümİşveren(result.data.işveren)
                await setTümİşçi(result.data.işçi)
            }
        }
      
    }

    const MesajGonder = async () => {
        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);

        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        if(data1.userData.işveren_id){
            const mesaj1 = {
                işveren_id: data1.userData.işveren_id,
                mesaj: message,
                alıcı_id: id
            }
            const result = await axios.post(`http://localhost:8080/php-is-ilanlari/api/mesaj_gonder_işveren.php`, {mesaj1}, headers)
            console.log(result)
        }
        if(data1.userData.işçi_id){
            const mesaj1 = {
                işçi_id: data1.userData.işçi_id,
                mesaj: message,
                alıcı_id: id
            }
            const result = await axios.post(`http://localhost:8080/php-is-ilanlari/api/mesaj_gonder_işçi.php`, {mesaj1}, headers)
            console.log(result)
        }
    }
    
    return (
        <div class="profil-mesajlaşma">
            <div class="profil-mesajlaşma-başlık">
                Mesajlar
            </div>
            <div class="mesajlaşma-alanı">
                {/* <div class="kişiler">
                    <div class="arama-alanı1">
                        <i class="fas fa-search"></i><textarea name="" id="" rows="1"
                            placeholder="Mesaj veya kişi arama"></textarea>
                    </div>
                     <div class="sohbet-kişileri">
                        <div class="eleman">
                            <div class="foto">
                                <img src={user} />
                            </div>
                            <div class="kişi">
                                <div class="isim-zaman">
                                    <div class="isim">
                                        Ahmet
                                    </div>

                                    <div class="zaman">
                                        12:03
                                    </div>
                                </div>
                                <div class="mesaj">
                                    Naber
                                </div>
                            </div>
                        </div>
                        <div class="eleman">
                            <div class="foto">
                                <img src={user} alt="" />
                            </div>
                            <div class="kişi">
                                <div class="isim-zaman">
                                    <div class="isim">
                                        SerhatSerhatSerhat
                                    </div>
                                    <div class="zaman">
                                        14:30
                                    </div>
                                </div>
                                <div class="mesaj">
                                    Siz: İyidir
                                </div>
                            </div>
                        </div>
                        <div class="eleman">
                            <div class="foto">
                                <img src={user} alt="" />
                            </div>
                            <div class="kişi">
                                <div class="isim-zaman">
                                    <div class="isim">
                                        Serhat
                                    </div>
                                    <div class="zaman">
                                        14:30
                                    </div>
                                </div>
                                <div class="mesaj">
                                    İyidir
                                </div>
                            </div>
                        </div>
                        <div class="eleman">
                            <div class="foto">
                                <img src={user} alt="" />
                            </div>
                            <div class="kişi">
                                <div class="isim-zaman">
                                    <div class="isim">
                                        SerhatSerhatSerhat
                                    </div>
                                    <div class="zaman">
                                        14:30
                                    </div>
                                </div>
                                <div class="mesaj">
                                    Siz: İyidir
                                </div>
                            </div>
                        </div>
                        <div class="eleman">
                            <div class="foto">
                                <img src={user} alt="" />
                            </div>
                            <div class="kişi">
                                <div class="isim-zaman">
                                    <div class="isim">
                                        SerhatSerhatSerhat
                                    </div>
                                    <div class="zaman">
                                        14:30
                                    </div>
                                </div>
                                <div class="mesaj">
                                    Siz: İyidir
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> */}
                <div class="mesajlar-alanı">
                    <div class="mesaj-bilgi">

                        {
                        JSON.parse(localStorage.getItem("userData")).userData.işçi_id ?
                        işveren.şirket_adı: işçi.işçi_adı + ' '+  işçi.işçi_soyadı
                    }
                    </div>
                   
                    <div class="içerik">
                        <div class="mesajlar"> 
                            {   
                                    
                                                        // id 0'dan farklı ise 
                                mesajlar1.map((data) => (
                                    // localStorage'daki veri ile mesajlardaki veri uyumlu mu 
                                    
                                    <>
                                    
                                      
                                     {
                                        JSON.parse(localStorage.getItem("userData")).userData.işveren_id ?
                                        data.gönderen_işveren_id == 0 ?<p>{işçi.işçi_adı +' '+  işçi.işçi_soyadı}</p> : <p>Sen</p>:
                                        data.gönderen_işçi_id == 0 ?<p>{işveren.şirket_adı}</p> : <p>Sen</p>
                                     } 
                                    <div className="karşıdan-gönderen">
                                        <div class="mesaj">
                                            {data.mesaj}
                                        </div>
                                    </div>
                                    </>
                                    )
                                )
                            }
                    
                            
                            
                            {/* <div class="karşıya-giden">
                                <div class="mesaj">
                                    Merhaba
                                </div>
                            </div>
                            <div class="karşıya-giden">
                                <div class="mesaj">
                                    Merhaba
                                </div>
                            </div><div class="karşıya-giden">
                                <div class="mesaj">
                                    Merhaba
                                </div>
                            </div>
                            <div class="karşıdan-gönderen">
                                <div class="mesaj">
                                    Merhaba Merhaba Merhaba Merhaba Merhaba Merhaba Merhaba Merhaba Merhaba MerhabaMerhabaMerhaba
                                </div>
                            </div>
                            <div class="karşıya-giden">
                                <div class="mesaj">
                                    Merhaba
                                </div>
                            </div> */}
                        </div>
                        <div class="gönderme">
                            <textarea name="" id="textarea" onChange={(e) => setMessage(e.target.value)} placeholder="Mesaj girebilirisiniz."></textarea>
                            <button onClick={MesajGonder} type="submit"><i class="fas fa-share"></i>Mesajı Gönder</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
