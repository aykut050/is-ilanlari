import React, { useState } from 'react';
import './AdminYazıPaylaşım.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

export default function AdminYazıPaylaşım() {
    const [yazı, setYazı] = useState("")
    const [yazıBaşlık, setYazıBaşlık] = useState("")
    const [file, setFile] = useState(null)
    
    const kaydet = async () => {
                
        const blogYazı = {
            yazı: yazı,
            yazıBaşlık: yazıBaşlık,
        }

        const formData = new FormData();
        formData.append('photo',file)
        
        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            'content-type': 'multipart/form-data'
        }
        await axios.post(`http://localhost:8080/php-is-ilanlari/api/blog_yazı_paylaşımı.php`, { blogYazı }, headers)
            .then(res => {
                console.log(res);
                console.log(res.data); 
        })
        await axios.post(`http://localhost:8080/php-is-ilanlari/api/blog_foto_paylaşım.php`, formData, headers)
            .then(res => {
                console.log(res);
                console.log(res.data); 
        })
        window.location.reload();

    }
         return (
        <div class="admin-yazı-paylaşım">
            <div class="başlık">
                Admin Yazı Paylaşım Alanı
            </div>
            
            <div class="yazı-başlık">
                <p>Yazı Başlığı</p>
                <input type="text" name="yazıBaşlık" placeholder="Yazının Başlığı" onChange={event => setYazıBaşlık(event.target.value)} />
            </div>
            <div className="yazı-içerik">
                <p>Yazı İçeriği</p>
            </div>
            <div className="CK-EDITOR">
                <CKEditor
                    editor={ ClassicEditor }
                    onChange={ ( e, editor ) => {
                        const data = editor.getData();
                        setYazı(data);
                    }}
                    
                />
            </div>
            {/* <div class="yazı-başlık">
                <p>Yazı Fotoğrafı</p>
                <input type="file" onChange={event => setFile(event.target.files[0])} />
            </div> */}
            <div class="maddeler-işlemler">
                <button type="submit" class="kaydet" onClick={kaydet}><i class="fas fa-save"></i>Paylaş</button>
            </div>
        </div>
    )
    }
   
