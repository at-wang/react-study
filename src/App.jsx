/*
* 应用的根组件
*/
import React, {Component} from 'react';
import {Button} from "antd";

class App extends Component {

    handleClick = () => {

        return "dad";
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleClick}>哈哈哈哈</Button>
            </div>
        );
    }
}

export default App;