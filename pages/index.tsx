import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useMount } from 'react-use'
import { Card } from '../components/Cards'
import { Widget } from '../components/Widget'
import styles from '../styles/Home.module.css'
import $axios from '../utils/request'

const Home: NextPage = (props: any) => {

  const renderCards = (data: any, type: any) => {
    return data.map((item: any) => {
      let sub =  type == 'posts' ? `/${type}/${item.slug}/` : '/'
      return <Card
      key={type + "_" + item.id}
      title={item.title}
      // 限制字数
      description={item.content.substring(0, 45)}
      href={sub + item.path}
    />
    })}

  return (
    <div className={styles.container}>
      <style>

      </style>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/wibus-wee/GS-web-demo">GS-web-demo!</a>
        </h1>

        <p className={styles.description}>
          It is a demo for GS-web.
        </p>


        <h3 className={styles.title}>
          Posts
        </h3>
        <div className={styles.grid}>
          {renderCards(props.post, "posts")}
        </div>
        <h3 className={styles.title} style={{margin: 30}}>
          Pages
        </h3>
        <div className={styles.grid}>
        {renderCards(props.page, "pages")}
        </div>

        <h3 className={styles.title} style={{margin: 30}}>
          Friends
        </h3>
        <div className={styles.grid}>
        {
          props.friends.map((item: any) => {
            return <Widget
            key={"friends" + item.id}
            title={item.name}
            description={item.description}
            img={item.image}
            href={item.website}
            />
          })
        }
        </div>

        <h3 className={styles.title} style={{margin: 30}}>
          Comments
        </h3>
        <div className={styles.grid}>
        {
          props.comments.map((item: any) => {
            return <Widget
            key={"comments_" +item.cid}
            title={item.author}
            description={item.content}
            href={item.website}
            />
          })
        }
        </div>

      </main>

      <footer className={styles.footer}>
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </footer>
    </div>
  )
}

Home.getInitialProps = async () => {
  const post = await $axios.get('/posts/list').then(res => {
    return res.data
  })
  const page = await  $axios.get('/pages/list').then(res => {
    return res.data
  })
  const friends = await  $axios.get('/friends/list').then(res => {
    return res.data
  })
  const comments = await  $axios.get('/comments/list').then(res => {
    return res.data
  })
  const categories = await  $axios.get('/categories/list').then(res => {
    return res.data
  })
  return {
    post: post,
    page: page,
    friends: friends,
    comments: comments,
    categories: categories
  }
}

export default Home
