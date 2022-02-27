/*
 * @FilePath: /GS-web-demo/components/Cards.tsx
 * @author: Wibus
 * @Date: 2022-02-27 13:42:48
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-27 20:30:08
 * Coding With IU
 */

import Router from 'next/router'
import styles from '../styles/Home.module.css'

type cardPropsType = {
  title: string
  description: string
  href: string
}

export const Card = (props: cardPropsType) => {
    return (
      <a onClick={() => {Router.push(props.href)}} className={styles.card}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      </a>
    )
}