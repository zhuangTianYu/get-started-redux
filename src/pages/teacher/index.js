import React, { useEffect, useState } from 'react'
import { fetchYearList } from '../../service'
import '../../store'

const Teacher = () => {
  const [yearList, setYearList] = useState([])

  useEffect(() => {
    fetchYearList()
      .then(yearList => setYearList(yearList))
  }, [])

  return (
    <div className="teacher">
      <div className="term-list">
        teacher
        <select>
          {
            yearList.map(item => (
              <option value={item} key={item}>
                {item}年
              </option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default Teacher
