import React, { useState } from 'react'
import './AramaAlanı.css'
import axios from 'axios'
import { useHistory, useLocation } from "react-router-dom";


export default function AramaAlanı(props) {
    let history = useHistory();
    const location = useLocation();

    const [searchText, setSearchText] = useState("");

    const handleInput = (e) => {
        const text = e.target.value;
        setSearchText(text);
    }

    const handleEnterKeyPressed = async (e) => {
        if(e.key === "Enter"){
            await Ara();
        }
    }
    // post yapacağız veritabanına input değerini veritabanında arayacağız. İlk baş denedim olmadı state gitmedi 
    const Ara = async () => {
        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        const arama = {
            searchText1: searchText
        }
        const result = await axios.post(`http://localhost:8080/php-is-ilanlari/api/arama.php`, {arama}, headers)
        console.log(result)
        history.push({pathname: "/AramaSonuçları",
                      state: result.data})
    };
    
    return (
        <>{
            localStorage.getItem("userData") ? 
            
            <div className="arama-alanı-index">
            <div className="arama-kısmı">
                <i className="fas fa-search"></i>
                <input type="text" onChange={handleInput} onKeyPress={handleEnterKeyPressed} 
                value={searchText} className="arama-inputu" placeholder="Meslek, sektör arayabilirsiniz" />
            </div>
            <button type="submit" onClick={Ara} className="arama-butonu">
                Ara
            </button>
        </div> : null
         }</>
       
        
    )
}
