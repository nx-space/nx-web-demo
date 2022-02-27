/*
 * @FilePath: /gs-web-demo/utils/main.ts
 * @author: Wibus
 * @Date: 2022-02-27 13:49:50
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-27 13:49:51
 * Coding With IU
 */
export const isClientSide = () => {
  return typeof window !== 'undefined'
}
export const isServerSide = () => {
  return !isClientSide()
}