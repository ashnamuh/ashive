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

export interface RequestOptions {
  method?: Method;
  data?: any;
}

export interface Response<T> {
  data: T;
  status: number;
  url: string;
  request: {
    url: string;
    options?: RequestOptions;
  }
}

const  request = <T = any>(url: string, options?: RequestOptions): Promise<Response<T>> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest() // for supporting IE >= 10
    xhr.onreadystatechange = () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200 || xhr.status === 201) {
          let data
          try {
            data = JSON.parse(xhr.response)
          } catch {
            data = xhr.response
          }
          resolve({
            data,
            status: xhr.status,
            url: xhr.responseURL,
            request: {
              url,
              options
            }
          })
        } else {
          reject(xhr.response)
        }
      }
    }
    xhr.open(options?.method || 'get', url)
    if (options?.data) {
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify(options.data))
    } else {
      xhr.send()
    }
  })
}

export default request
