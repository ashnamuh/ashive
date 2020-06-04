export type Method =
'get' | 'GET'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'
| 'link' | 'LINK'
| 'unlink' | 'UNLINK'

export interface requestOptions {
  method?: Method;
  data?: any;
}

const  request = <T = any>(url: string, options?: requestOptions): Promise<T> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest() // for supporting IE >= 10
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200 || xhr.status === 201) {
          resolve(xhr.response)
        } else {
          reject(xhr.response)
        }
      }
    }
    xhr.open(options?.method || 'get', url)
    xhr.send()
  })
}

export default request
