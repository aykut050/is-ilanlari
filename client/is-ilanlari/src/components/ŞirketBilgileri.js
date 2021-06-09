import React from 'react';
import './ŞirketBilgileri.css';
import axios from 'axios';

class ŞirketBilgileri extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id:'',
            şirket_adı: '',
            iş_yeri_adresi: '',
            telefon_numarası:'',
            email:'',
            web_sitesi:'',
            şirket:[]
        };
            this.kaydet = this.kaydet.bind(this);
            this.onChange = this.onChange.bind(this);
    }
    componentDidMount() {
        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);
        axios
            .get("http://localhost:8080/php-is-ilanlari/api/şirket_bilgileri_al.php")
            .then(({ data }) => {
                this.setState({şirket:data.şirketler.find(x=>x.işveren_id===data1.userData.işveren_id)})
            })
    }
    async kaydet() {
        let data = localStorage.getItem("userData");
        let data1 = JSON.parse(data);
        await this.setState({id:data1.userData.işveren_id})

        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*"
        }
        const şirket_bilgileri = {
            id: this.state.id,
            şirket_adı: this.state.şirket_adı,
            iş_yeri_adresi: this.state.iş_yeri_adresi,
            telefon_numarası: this.state.telefon_numarası,
            email: this.state.email,
            web_sitesi: this.state.web_sitesi
        }
        axios.post(`http://localhost:8080/php-is-ilanlari/api/profil_bilgi_düzenle.php`, { şirket_bilgileri }, headers)
            .then(res => {
                console.log(res);
                console.log(res.data); 
        })
        window.location.reload();

    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return (
            <div class="profil-içerik-bilgisi">
                <div class="başlık">
                    Şirket Bilgileri
                </div>
                <div class="alanlar">
                    <div class="sol-bölüm">
                        <div class="eleman">
                            <div class="eleman-ismi">
                                Şirket Adı
                            </div>
                            <div class="input-alanı">
                                <input type="text" placeholder="Şirket Adı" onChange={this.onChange} placeholder={this.state.şirket.şirket_adı} name="şirket_adı"/>
                            </div>
                        </div>
                        <div class="eleman">
                            <div class="eleman-ismi">
                                İş Yeri Adresi
                            </div>
                            <div class="input-alanı">
                                <input type="text" placeholder="İş yeri adresi" placeholder={this.state.şirket.iş_yeri_adresi}  onChange={this.onChange} name="iş_yeri_adresi"/>
                            </div>
                        </div>
                        <div class="eleman">
                            <div class="eleman-ismi">
                                Telefon Numarası
                            </div>
                            <div class="input-alanı">
                                <input type="tel" placeholder="Telefon numarası" placeholder={this.state.şirket.telefon_numarası} onChange={this.onChange} name="telefon_numarası" />
                            </div>
                        </div>
                        <div class="eleman">
                            <div class="eleman-ismi">
                                E-posta
                            </div>
                            <div class="input-alanı">
                                <input type="email" placeholder="E-mail" name="email"  placeholder={this.state.şirket.işveren_e_mail}  onChange={this.onChange}/>
                            </div>
                        </div>
                        <div class="eleman">
                            <div class="eleman-ismi">
                                Web Sitesi
                            </div>
                            <div class="input-alanı">
                                <input type="text" placeholder="Web Sitesi" onChange={this.onChange} placeholder={this.state.şirket.web_sitesi} name="web_sitesi"/>
                            </div>
                        </div>
                        
                    </div>
                    <div class="sağ-bölüm">
                        <img src="images/user (1).png" alt="" />
                    </div>
                </div>
                <div class="kaydet-button">
                    <input type="submit" value="Kaydet" onClick={this.kaydet} />
                </div>
            </div>
        )
    }
}
 export default ŞirketBilgileri;