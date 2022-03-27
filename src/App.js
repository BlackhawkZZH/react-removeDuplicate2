import React, {useState, useCallback, memo} from 'react'
import './style.css'

export default function App(){
  const [list, setList] = useState([1, 23, 5, 1, 4, 5, 12])
  const duplicateRemover = () => {
    let remover = new Set()
    list.forEach((elem) => {
      remover.add(elem)
    })
    setList(Array.from(remover))
  }

  return(
    <div>
      <ul onClick = {() => duplicateRemover()}>
        {list.map((elem, i) => {
          return <li key = {i}>{elem}</li>
        })}
      </ul>
    </div>
  )
}