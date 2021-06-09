import React, { Component} from 'react'
import './İşVerenÜyeOl.css'
import { PostData } from '../services/PostData_İşçi';
import { Redirect } from 'react-router-dom';


class İşVerenÜyeOl extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };
            this.signup = this.signup.bind(this);
            this.onChange = this.onChange.bind(this);
    }
    signup() {
        if(this.state.username && this.state.password){
            PostData('signup_işveren',this.state).then((result) => {
            let responseJson = result;
                if(responseJson.userData){
                    localStorage.setItem('userData',JSON.stringify(responseJson));
                    this.setState({redirectToReferrer: true});
                }
                else
                    alert(result.error);
                });
        }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        if (localStorage.getItem('userData')) {
            return (<Redirect to={'/'} />)
        }
        return (
        <div class="üyeol-formu-bölümü-işveren">
            <div class="başlık">
                <i class="fas fa-user-plus"></i> İş Veren Üye Olma
            </div>
            <div class="içerik">
                    <div class="form-container">
                        <label for="username"><i class="fas fa-address-card"></i>Kullanıcı Adı </label>
                        <input type="text" id="username-input" autocomplete="off" placeholder="Kullanıcı Adınız" onChange={this.onChange} name="username" required />

                        <label for="password" id="password"><i class="fas fa-key"></i> Şifre </label>
                        <input type="password" id="password-input" placeholder="Şifreniz" onChange={this.onChange} name="password" required />

                        <label for="password" id="password"><i class="fas fa-key"></i> Şifre Tekrar </label>
                        <input type="password" id="password-input" placeholder="Şifre Tekrar" onChange={this.onChange} name="password" required />

                        <input type="submit" id="kayıt-ol" value="Kayıt Ol" onClick={this.signup}/>
                        <div class="diğerleri-üye-ol">
                            <a href="#">Giriş Yap</a>
                        </div>
                    </div>
            </div>
        </div> 
        )
    }
    
   
}
export default İşVerenÜyeOl;