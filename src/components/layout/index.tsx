import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as API from '../../api/test/test'
import './style/index.scss'
import MainRoute from '../../routes/main'
import { Flex, Layout, Space } from 'antd'
import { layoutClsPreFix } from '../../constants'
const { Header, Footer, Sider, Content } = Layout
const clsPreFix = layoutClsPreFix
export function LayoutCom() {
  // const [imgSrc, setImgSrc] = useState('https://d.c-launcher.com/wallpaper/img/953/53b26650e4b0dc540acf5681/1404200528681/wallpaper.jpg')
  const params = useParams()
  console.log(params)

  const renderBackground = () => {
    return (
      <ul className="backgroundImgsBox">
        <li>
          <span>img1</span>
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
        <li>
          <span>img5</span>
        </li>
        <li>
          <span>img6</span>
        </li>
      </ul>
    )
  }

  const renderRoute = () => {
    return <MainRoute></MainRoute>
  }

  return (
    <Layout rootClassName={`${clsPreFix}`}>
      <Header className={`${clsPreFix}-header`}>{renderBackground()}</Header>
      <Content className={`${clsPreFix}-content`}>{renderRoute()}</Content>
      <Footer className={`${clsPreFix}-fotter`}></Footer>
    </Layout>
  )
}
