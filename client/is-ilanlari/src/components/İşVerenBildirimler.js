import React, { useState, useEffect } from 'react';
import './İşVerenBildirimler.css';
import user from '../images/user (1).png';
import axios from 'axios'
import {
    useHistory, useLocation,
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useParams
} from 'react-router-dom';

export default function İşVerenBildirimler() {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadBildirimler();
    }, [])
    
    const loadBildirimler = async () => {
        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);
        const result = await axios
            .get("http://localhost:8080/php-is-ilanlari/api/bildirim_al.php")
        setData(result.data.bildirimler.filter(x => x.iş_veren_id === data1.userData.işveren_id)) 
    }

    return (
        <div class="işveren-bildirimler-alanı">
            <div class="başlık">
                Bildirimleriniz
        </div>
            <div class="elemanlar">
                {data.map((data) => (
                    <div class="eleman">
                        <div class="foto">
                            <img src={user} alt="" />
                        </div>
                        <div class="açıklama">
                            <Link to={'/İşçiProfil/' + data.işçi_id}>
                                {data.işçi_adı}
                            </Link> şirketiniz tarafından verilmiş olan {data.unvan} iş ilanına başvurdu.
                        </div>
                    </div>   
                ))}
                
            </div>
        </div>
    )
}
