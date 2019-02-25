import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PageTitle from 'components/page-title/index.jsx';

class ErrorPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="出错了!" />
                <div className="row">
                    <span>找不到该路径，</span>
                    <Link to="/">点我返回首页</Link>
                </div>
            </div>
        )
    }
}
export default ErrorPage;