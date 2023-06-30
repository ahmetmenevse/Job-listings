import data from "./data.json";
import Jobs from './components/Jobs';
import Header from './components/Header'
import { useState } from "react";

function App() {

  const [filterKeywords, setFilterKeywords] = useState([])

  const addFilterKeywords = (data) => {
    if(!filterKeywords.includes(data)){
      setFilterKeywords([...filterKeywords,data])
    }
  }

  const deleteKeywords = (data) => {
    const newKeywords = filterKeywords.filter((key)=> key !== data)
      setFilterKeywords(newKeywords)
    }

    const clearAll = () => {
      setFilterKeywords([])
    }

  return (
    <div>
      <div className="header"></div>
      {
        filterKeywords.length > 0 && 
          <Header 
            keywords={filterKeywords} 
            removeKeywords={deleteKeywords} 
            clearAll={clearAll}/>
      }
      <Jobs
        keywords={filterKeywords}
        data={data} 
        setkeywords={addFilterKeywords} />
      
    </div>
  );
}

export default App;
