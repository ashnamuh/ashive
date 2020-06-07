export const getString = (string: string, length: number) => {
  let s = ''
  let i = 0
  while (i++ < length) {
    s += string
  }
  return s
}

export const zf =  (value: string | number, length: number) => {
  value = value + ''
  return getString('0', length - value.length) + value
}

export const isNumber = (value : string) => !isNaN(Number(value))
