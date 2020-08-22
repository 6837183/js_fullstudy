// 入口文件
import React from "react";  //  es6  import  全面使用es6语法
import ReactDOM from "react-dom";
import "./styles.css";  // css  WXss  global.css

// react 语法   
import { MyComponent } from './demo';

function APP() {
    return (
        // WXML  JSX
        <div className="App">
            App
            <MyComponent />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<APP />, rootElement)