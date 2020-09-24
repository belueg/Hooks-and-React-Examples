import React, {useContext} from 'react'
import { myContext } from '../Context'

export default function Home() {
  const context = useContext(myContext)
    return (
        <>
          <h1>Home</h1>  
          <p>{context}</p>
        </>
    )
}