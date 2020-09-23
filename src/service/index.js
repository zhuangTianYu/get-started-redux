const sleep = (data = null, duration = 500) => new Promise(resolve => {
  const timer = setTimeout(() => {
    clearTimeout(timer)
    resolve(data)
  }, duration)
})

const termList = [
  { id: 1, name: '2020学期' },
  { id: 2, name: '2021学期' }
]

export const fetchTermList = () => sleep(termList)
