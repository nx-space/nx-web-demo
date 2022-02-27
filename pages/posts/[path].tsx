/*
 * @FilePath: /GS-web-demo/pages/posts/[path].tsx
 * @author: Wibus
 * @Date: 2022-02-27 20:28:11
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-27 21:26:46
 * Coding With IU
 */

import { NextPage } from "next";
import { useState } from "react";
import { useMount } from "react-use";
import $axios from "../../utils/request"
import styles from '../../styles/Home.module.css'
import Markdown from 'react-markdown'

const Posts: NextPage = (props: any) => {

  const [data, setData] = useState<any>()
  const [isloading, setisLoading] = useState<Boolean>(false)
  useMount(() => {
    $axios.get("/posts/"+props.path).then((res) => {
      setData(res.data)
    }).catch((err) => {console.error(err)})
  })
  
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {data ? data.title : ''}
        </h1>
        <p style={{color: 'rgb(126 126 126)'}}>作者: wibus ｜ 路径: {data ? data.path : ''} ｜ 分类号：{data ? data.slug : ''}</p>
        <p id="contents">
          <Markdown
            // eslint-disable-next-line react/no-children-prop
            children={data ? data.content : ''}
          />
        </p>
      </main>
    </div>
  )
}

Posts.getInitialProps = async (ctx: any) => {
  const { path } = ctx.query
  return {
    path: path
  }
}

export default Posts