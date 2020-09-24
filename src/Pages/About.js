import React, {useContext} from 'react'
import { myContext } from '../Context'

export default function About() {
const msg = useContext(myContext)
  return (
        <>
          <h1>About</h1>  
          <h2>{msg}</h2>
        </>
    )
}
