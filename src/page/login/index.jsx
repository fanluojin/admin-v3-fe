import React, { Component } from 'react';

import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

import './index.scss';

const _mm = new MUtil();
const _user = new User();

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        }
    }

    onInputChange(e) {
        let inputValue = e.target.value,
            inputName = e.target.name;
        this.setState({
            [inputName]: inputValue
        })
    }

    onSubmit(e) {
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        },
            checkResult = _user.checkLoginInfo(loginInfo);
        // 验证通过
        if (checkResult.status) {
            _user.login(loginInfo).then((res) => {
                // localStorage.setItem('userInfo', JSON.stringify(res));
                _mm.setStorage('userInfo', res);
                this.props.history.push(this.state.redirect);
            }, (errMsg) => {
                _mm.errorTips(errMsg);
            })
        }
        // 验证失败
        else {
            _mm.errorTips(checkResult.msg);
        }
    }

    // 回车登录
    onInputKeyUp(e) {
        if(e.keyCode === 13) {
            this.onSubmit();
        }
    }

    render() {
        return (

            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default panel-login">
                    <div className="panel-heading">欢迎登录 - MMALL管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="请输入用户名"
                                    onChange={e => { this.onInputChange(e) }} 
                                    onKeyUp={e => this.onInputKeyUp(e)}/>
                            </div>
                            <div className="form-group">
                                <input type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="请输入密码"
                                    onChange={e => { this.onInputChange(e) }} 
                                    onKeyUp={e => this.onInputKeyUp(e)}/>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block"
                                onClick={(e) => { this.onSubmit(e) }}>登录</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    
}

export default Login;