import React, { Component } from 'react';
import './İşAlanı.css';
import axios from 'axios';

class İşAlanı extends Component {
    constructor(props){
        super(props);
            this.state = {
                eleman:''
            };
            this.kaydet = this.kaydet.bind(this);
            this.onChange = this.onChange.bind(this);
        }
        async kaydet(){
            const iş_alanı_eleman = {
                işAlanıEleman: this.state.eleman
            }
            var headers = {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*"
            }
            axios.post(`http://localhost:8080/php-is-ilanlari/api/iş_alanı_admin.php`, { iş_alanı_eleman }, headers)
                .then(res => {
                    console.log(res);
                    console.log(res.data); 
            })
        }
        onChange(e){
            this.setState({eleman: e.target.value});
        }
    render(){
        return (
        <div class="admin-iş-alanı-paylaşım">
            <div class="başlık">
                İş İlanında İş Alanı Girme
            </div>
            <div class="yazı-başlık">
                <p>İş Alanı</p>
                <input type="text" name="yazıBaşlık" placeholder="İş Alanı" onChange={this.onChange} />
            </div>        
            <div class="maddeler-işlemler">
                <button type="submit" class="kaydet" onClick={this.kaydet}><i class="fas fa-save"></i>Ekle</button>
            </div>
        </div>
        )
    }
   
}

export default İşAlanı;
