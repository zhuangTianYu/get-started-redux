import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchYear } from '../../store/actions'

const mapStateToProps = state => ({ year: state.year })

const mapDispatchToProps = dispatch => ({
  fetchYear: dispatch(fetchYear())
})

const Teacher = props => {
  const { year } = props

  const [yearList, setYearList] = useState([])

  useEffect(() => {
    fetchYear()
  }, [])

  useEffect(() => {
    setYearList(year.list)
  }, [year.list])

  useEffect(() => {
    year.error && console.log(year.error.message)
  }, [year.error])

  return (
    <div className="teacher">
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
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Teacher)
