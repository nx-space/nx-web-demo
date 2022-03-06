/*
 * @FilePath: /GS-web-demo/pages/posts/[category]/[path].tsx
 * @author: Wibus
 * @Date: 2022-02-27 20:28:11
 * @LastEditors: Wibus
 * @LastEditTime: 2022-03-06 13:21:49
 * Coding With IU
 */

import { NextPage } from "next";
import { useState } from "react";
import { useMount } from "react-use";
import $axios from "../../../utils/request"
import styles from '../../../styles/Home.module.css'
import Markdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/cjs/styles/hljs";





const Posts: NextPage = (props: any) => {

  const [isloading, setisLoading] = useState<Boolean>(false)
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {props.data.title}
        </h1>
        <p style={{color: 'rgb(126 126 126)'}}>作者: wibus ｜ 路径: {props.data.path} ｜ 分类号：{props.data.slug}</p>
        <p id="contents" style={{padding: 75}}>
          <Markdown
            // eslint-disable-next-line react/no-children-prop
            children={props.data.content}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, '')}
                    style={githubGist}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </p>
      </main>
    </div>
  )
}

Posts.getInitialProps = async (ctx: any) => {
  const { category, path } = ctx.query
  const data = await $axios.get("/categories/" + category + '/' +  path).then((res) => {
    // console.log("/categories/" + category + '/' +  path)
    return res.data
  })
  return {
    data: data,
  }
}

export default Posts