/*
 * @FilePath: /gs-web-demo/utils/request.ts
 * @author: Wibus
 * @Date: 2022-02-27 13:49:27
 * @LastEditors: Wibus
 * @LastEditTime: 2022-02-27 13:50:39
 * Coding With IU
 */
// import { Message } from '@arco-design/web-react'
import axios, { AxiosError } from 'axios'
import { isClientSide, isServerSide } from './main'
const service = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APIURL || '/api',
  // withCredentials: true,
  timeout: 10000,
})

service.interceptors.request.use((config) => {

    return config
})

service.interceptors.response.use(
  undefined,
  (error: AxiosError<Record<string, any> | undefined>) => {
    // if (process.env.NODE_ENV === 'development') {
    console.error(error.message)
    // }

    if (
      !error.response ||
      error.response.status === 408 ||
      error.code === 'ECONNABORTED'
    ) {
      if (isClientSide()) {
        console.error('请求超时, 请检查一下网络哦!')
      } else {
        const msg = '上游服务器请求超时'
        console.error(msg)
        console.error(msg, error.message)
      }
    }

    const response = error.response
    if (response) {
      const data = response.data

      if (data && data.message) {
        console.error(
          typeof data.message == 'string'
            ? data.message
            : Array.isArray(data.message)
            ? data.message[0]
            : '请求错误',
        )
      }
    }

    return Promise.reject(error)
  },
)

export default service
