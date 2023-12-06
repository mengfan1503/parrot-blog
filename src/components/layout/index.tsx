import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { Button, Image } from 'antd'
import * as API from '../../api/test/test'
import './style/index.css'

export function Layout() {
  const [count, setCount] = useState(0)
  // const [imgSrc, setImgSrc] = useState('https://d.c-launcher.com/wallpaper/img/953/53b26650e4b0dc540acf5681/1404200528681/wallpaper.jpg')
  const params = useParams()
  console.log(params)

  useEffect(() => {
    window.document.title = count + ''
  }, [count])

  // const getCatImg = () => {
  //   console.log('11')
  //   API.getCatImg().then((res: any) => {
  //     const urlss = res.data.response.urls
  //     setImgSrc(urlss.full)
  //   })
  // }

  // const getText = () => {
  //   console.log('1221')
  //   API.getText().then((res) => {
  //     console.log(res)
  //     setCount(res.data)
  //   })
  // }

  return (
    <div className="box">
      {/* <div><Button type="primary" onClick={()=>setCount(count+1)}>{count}</Button></div>
            <div><Button type="primary" onClick={()=>{getCatImg()}}>getUrl</Button></div>
            <div><Button type="primary" onClick={()=>{getText()}}>getText</Button></div>
            <img src={imgSrc} alt="" /> */}
      <ul className="imgBox">
        <li>
          <span className="name1">img1</span>
        </li>
        <li>
          <span>img2</span>
        </li>
        <li>
          <span>img3</span>
        </li>
        <li>
          <span>img4</span>
        </li>
      </ul>
      <div className="test"></div>
      {/* <div className="imgBox">
        <img src={testimg1} width={'100%'} alt="" />
        <span style={{ background: testimg1 }}></span>
      </div>
      <div className="imgBox">
        <img src={testimg2} width={'100%'} alt="" />
      </div>
      <div className="imgBox">
        <img src={testimg3} width={'100%'} alt="" />
      </div>
      <div className="imgBox">
        <img src={testimg4} width={'100%'} alt="" />
      </div> */}
    </div>
  )
}
