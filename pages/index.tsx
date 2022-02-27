import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useMount } from 'react-use'
import { Card } from '../components/Cards'
import { Widget } from '../components/Widget'
import styles from '../styles/Home.module.css'
import $axios from '../utils/request'

const Home: NextPage = () => {

  const [postData, setPostData] = useState<any>([])
  const [page, setPage] = useState<any>([])
  const [friends, setFriends] = useState<any>([])
  const [comments, setComments] = useState<any>([])
  const [categories, setCategories] = useState<any>([])

  useMount(() => {
    $axios.get('/posts/list').then(res => {
      setPostData(res.data)
    })
    $axios.get('/pages/list').then(res => {
      setPage(res.data)
    })
    $axios.get('/friends/list').then(res => {
      console.log(res.data)
      setFriends(res.data)
    })
    $axios.get('/comments/list').then(res => {
      setComments(res.data)
    })
    $axios.get('/categories/list').then(res => {
      
      setCategories(res.data)
    })
  })

  const renderCards = (data: any) => {
    return data.map((item: any) => {
      return <Card
      key={item.id}
      title={item.title}
      // 限制字数
      description={item.content.substring(0, 45)}
      href={'#' + item.path}
    />
    })}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/Gold-Space/GS-web-demo">GS-web-demo!</a>
        </h1>

        <p className={styles.description}>
          It is a demo for GS-web.
        </p>


        <h3 className={styles.title}>
          Posts
        </h3>
        <div className={styles.grid}>
          {renderCards(postData)}
        </div>
        <h3 className={styles.title} style={{margin: 30}}>
          Pages
        </h3>
        <div className={styles.grid}>
        {renderCards(page)}
        </div>

        <h3 className={styles.title} style={{margin: 30}}>
          Friends
        </h3>
        <div className={styles.grid}>
        {
          friends.map((item: any) => {
            return <Widget
            key={item.id}
            title={item.name}
            description={item.description}
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
          comments.map((item: any) => {
            return <Widget
            key={item.id}
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

export default Home
