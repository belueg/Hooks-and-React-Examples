import React, {useContext} from 'react'
import { myContext } from '../Context'

export default function About() {
  const {value, setValue} = useContext(myContext)
  return (
        <>
          <h1>About</h1>  
          <h2>{value}</h2>
        </>
    )
}
