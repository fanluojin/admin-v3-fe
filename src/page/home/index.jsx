import React, {Component} from 'react';
import PageTitle from 'components/page-title/index.jsx';

import './index.css';
class Home extends Component {

    
    
    render() {
        return (
            <div id="page-wrapper">
                {/* <h1 className="page-header">首页</h1> */}
                <PageTitle title="首页">
                    <button className="btn btn-primary">text</button>
                </PageTitle>
                <div className="row">
                    <div className="col-md-12">
                        body
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;