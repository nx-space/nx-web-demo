/*
 * @FilePath: /gs-web-demo/components/Card.tsx
 * @author: Wibus
 * @Date: 2022-02-27 13:42:48
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-27 13:45:37
 * Coding With IU
 */

import styles from '../styles/Home.module.css'

type cardPropsType = {
  title: string
  description: string
  href: string
}

export const Card = (props: cardPropsType) => {
    return (
      <a href={props.href} className={styles.card}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      </a>
    )
}