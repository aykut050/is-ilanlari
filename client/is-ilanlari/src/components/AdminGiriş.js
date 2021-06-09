import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from '../services/PostData_İşçi';
import './AdminGiriş.css';

class AdminGiriş extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
    };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    login() {
            if(this.state.username && this.state.password){
                    PostData('login_admin',this.state).then((result) => {
                    let responseJson = result;
                if(responseJson){
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
    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/AdminYazıPaylaşım'} />)
        }
        if (localStorage.getItem('userData')) {
            return (<Redirect to={'/AdminYazıPaylaşım'} />)
        }
        return (
            <div class="giriş-formu-bölümü-admin">
                <div class="başlık">
                    <i class="fas fa-sign-in-alt"></i> Admin Giriş
                </div>
                <div class="içerik">
                    <div class="form-container">
                        <label for="username"><i class="fas fa-address-card"></i>Kullanıcı Adı </label>
                        <input type="text" id="username-input" placeholder="Kullanıcı Adınız" name="username" onChange={this.onChange} required />

                        <label for="password" id="password"><i class="fas fa-key"></i> Şifre </label>
                        <input type="password" id="password-input" placeholder="Şifreniz" name="password" onChange={this.onChange} required />

                        <input type="submit" className="button" value="Giriş Yap" onClick={this.login}/>
                        <div class="diğerleri">
                           
                            <a href="#">Hesap Oluştur</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default AdminGiriş;