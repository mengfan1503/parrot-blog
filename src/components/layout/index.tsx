import React from "react";
import { useState, useEffect  } from "react";
import { useParams } from "react-router-dom"
import { Button } from 'antd';

export function Layout(){
    const [count, setCount] = useState(0)
    const params = useParams()
    console.log(params)

    useEffect(()=>{
        window.document.title = count + ''
    },[count])

    return (
        <div><Button type="primary" onClick={()=>setCount(count+1)}>count</Button></div>
    )
}