/*
 * @FilePath: /gs-web-demo/pages/posts/[path].tsx
 * @author: Wibus
 * @Date: 2022-02-27 20:28:11
 * @LastEditors: Wibus
 * @LastEditTime: 2022-03-04 22:46:24
 * Coding With IU
 */

import { NextPage } from "next";
import { useState } from "react";
import { useMount } from "react-use";
import $axios from "../../utils/request"
import styles from '../../styles/Home.module.css'
import Markdown from 'react-markdown'

const Posts: NextPage = (props: any) => {

  const [isloading, setisLoading] = useState<Boolean>(false)
  
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {props.data.title}
        </h1>
        <p style={{color: 'rgb(126 126 126)'}}>作者: wibus ｜ 路径: {props.data.path} ｜ 分类号：{props.data.slug}</p>
        <p id="contents">
          <Markdown
            // eslint-disable-next-line react/no-children-prop
            children={props.data.content}
          />
        </p>
      </main>
    </div>
  )
}

Posts.getInitialProps = async (ctx: any) => {
  const { path } = ctx.query
  const data = await $axios.get("/posts/"+path).then((res) => {
    return res.data
  })
  return {
    data: data,
  }
}

export default Posts