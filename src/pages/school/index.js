import React, { useEffect, useState } from 'react'
import { fetchTermList } from '../../service'

const School = () => {
  const [termList, setTermList] = useState([])

  useEffect(() => {
    fetchTermList()
      .then(termList => setTermList(termList))
  }, [])

  return (
    <div className="school">
      <div className="term-list">
        school
        {
          termList.map(item => (
            <div className="term-list__item" key={item.id}>
              {item.name}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default School
