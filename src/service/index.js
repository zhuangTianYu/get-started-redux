const sleep = (data = null, duration = 500) =>
  new Promise(resolve => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      resolve(data)
    }, duration)
  })

export const fetchYear = () => sleep([2020, 2021, 2022])
