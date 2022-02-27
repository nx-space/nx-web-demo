/*
 * @FilePath: /GS-web-demo/components/Widget.tsx
 * @author: Wibus
 * @Date: 2022-02-27 20:05:02
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-27 20:11:53
 * Coding With IU
 */
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import styles from '../styles/Home.module.css'

export const Widget = (props: any) => {
  return (
    <div className={styles.widget}>
      <a href={props.href}>{props.title}</a>
      <p>{props.description}</p>
    </div>
  );
}