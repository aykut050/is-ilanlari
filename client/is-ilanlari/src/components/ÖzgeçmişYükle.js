import React, { useState } from 'react';
import './ÖzgeçmişYükle.css';
import axios from 'axios';
import {
    useHistory, useLocation,
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

class ÖzgeçmişYükle extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          file:null,
          data: [],
          current: []
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.uploadFile = this.uploadFile.bind(this)

    }
    async onSubmit(e){
        e.preventDefault() 
        let res = await this.uploadFile(this.state.file);
        console.log(res.data);
        window.location.reload();

    }
    onChange(e) {
        this.setState({file:e.target.files[0]})
    }
    componentDidMount() {
        axios
            .get("http://localhost:8080/php-is-ilanlari/api/işçi_bilgileri_al.php")
            .then(({ data }) => {
                if (data.success === 1) {
                    this.setState({data:data})
                }
                // Gerekli kullanıcıyı bul.
                let data2 = localStorage.getItem("userData");
                let data3 = JSON.parse(data2);
                console.log(this.state.data);
                
                let a = this.state.data.işçiler.find(x => x.işçi_id === data3.userData.işçi_id);
                console.log(a);
                this.setState({current:a})
            })
    }
    async uploadFile(file){
        const formData = new FormData();

        let data = localStorage.getItem("userData")
        let data1 = JSON.parse(data);
        let id1 = data1.userData.işçi_id;
        //isim değiştirmem lazım
                
        //avatar1'i değiştirmem lazım     

        let i = Math.floor(Math.random() * 10000000) + 1;
        formData.append('avatar1', `${i}` + '-' + this.state.file.name)

        formData.append('avatar',file)
        formData.append('işçi_id',id1)  

        return await axios.post(`http://localhost:8080/php-is-ilanlari/api/işçi_özgeçmiş_yükle.php`, formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

      }
          
   
      //uploads klasörüne dosya ismini kaydetmem lazım.
    render() {
         return (
            <div class="profil-içerik-bilgisi">
            <div class="başlık">
                Özgeçmiş Yükle
            </div>
            <div class="alanlar">
                <div class="sol-bölüm">
                    <div class="eleman">
                        <form onSubmit={ this.onSubmit }>
                            <div class="eleman-ismi">
                                Özgeçmiş Yükle
                            </div>
                            <div class="input-alanı">
                                <input type="file" onChange={ this.onChange }/>
                                <button type="submit">Özgeçmiş Yükle</button>
                            </div>
                            <div class="input-alanı">
                                <p>Özgeçmişiniz</p>
                                <Link to={'/uploads/' + this.state.current.özgeçmiş_dosya} target="_blank" download>Download</Link>
                            </div>
                        </form>
                    </div>
                   
                </div>
            </div>
        </div> 
        )
    }
}
       
export default ÖzgeçmişYükle;