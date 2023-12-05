import React from "react";
import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom"
import { Button } from 'antd';
import * as API from '../../api/test/test'

export function Layout(){
    const [count, setCount] = useState(0)
    const [imgSrc, setImgSrc] = useState('https://d.c-launcher.com/wallpaper/img/953/53b26650e4b0dc540acf5681/1404200528681/wallpaper.jpg')
    const params = useParams()
    console.log(params)

    useEffect(()=>{
        window.document.title = count + ''
    },[count])

    const getCatImg = () => {
        console.log('11')
        API.getCatImg().then(res => {
            console.log(res)
        })
    }

    const getText = () => {
        console.log('1221')
        API.getText().then(res => {
            console.log(res)
            setCount(res.data)
        })
    }

    return (
        <div style={{ display:"flex", width: '100%', height: 500}}>
            <div><Button type="primary" onClick={()=>setCount(count+1)}>{count}</Button></div>
            <div><Button type="primary" onClick={()=>{getCatImg()}}>getUrl</Button></div>
            <div><Button type="primary" onClick={()=>{getText()}}>getText</Button></div>
            <img src={imgSrc} alt="" />
        </div>
    )
}