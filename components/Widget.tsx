/*
 * @FilePath: /GS-web-demo/components/Widget.tsx
 * @author: Wibus
 * @Date: 2022-02-27 20:05:02
 * @LastEditors: Wibus
 * @LastEditTime: 2022-03-05 07:16:06
 * Coding With IU
 */
import styles from '../styles/Home.module.css'

export const Widget = (props: any) => {
  return (
    <div className={styles.widget}>
      <img src={props.img} alt={props.img} style={{width: "inherit", zoom: "5%"}} />
      <a href={props.href}>{props.title}</a>
      <p>{props.description}</p>
    </div>
  );
}