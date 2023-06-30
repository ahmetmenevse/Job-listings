import React, { useEffect, useState } from 'react'
import Job from './Job'

const Jobs = ({data, setkeywords, keywords}) => {
console.log(data);

const [filteredData, setFilteredData] = useState([])

const modifiedData = () => {
  if(keywords.length > 0){

    const newData = filteredData.filter((i) => {
      return keywords.every(key => {
          return (
            i.role === key ||
            i.level === key ||
            i.languages.includes(key) ||
            i.tools.includes(key)
          )
        })
    })
    setFilteredData(newData)
  }else {
    setFilteredData(data)
  }
}

useEffect(() => {
  modifiedData()
}, [keywords])

  return (
    <div className='jobs'>
      {filteredData.map((i) => {
          return <Job key={i.id} data={i} setkeywords={setkeywords} />
          
        })}
    </div>
  )
}

export default Jobs
