/*
 * @FilePath: /GS-web-demo/pages/[page]/index.tsx
 * @author: Wibus
 * @Date: 2022-03-06 10:15:15
 * @LastEditors: Wibus
 * @LastEditTime: 2022-03-06 10:16:16
 * Coding With IU
 */
/*
 * @FilePath: /GS-web-demo/pages/Pages/[category]/[path].tsx
 * @author: Wibus
 * @Date: 2022-02-27 20:28:11
 * @LastEditors: Wibus
 * @LastEditTime: 2022-03-06 10:05:25
 * Coding With IU
 */

import { NextPage } from "next";
import { useState } from "react";
import { useMount } from "react-use";
import $axios from "../../utils/request"
import styles from '../../styles/Home.module.css'
import Markdown from 'react-markdown'

const Pages: NextPage = (props: any) => {

  const [isloading, setisLoading] = useState<Boolean>(false)
  
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {props.data.title}
        </h1>
        <p style={{color: 'rgb(126 126 126)'}}>作者: wibus ｜ 路径: {props.data.path}</p>
        <p id="contents" style={{padding: 75}}>
          <Markdown
            // eslint-disable-next-line react/no-children-prop
            children={props.data.content}
          />
        </p>
      </main>
    </div>
  )
}

Pages.getInitialProps = async (ctx: any) => {
  const { page } = ctx.query
  const data = await $axios.get("/pages/" + page).then((res) => {
    return res.data
  })
  return {
    data: data,
  }
}

export default Pages