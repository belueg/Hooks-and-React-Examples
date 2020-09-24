import React, {useContext} from 'react'
import { myContext } from '../Context'

export default function Home() {
  const {value, setValue} = useContext(myContext)
    return (
        <>
          <h1>Home</h1>  
          <p>{value}</p>
          <button onClick={() =>setValue("Heeey")}> Change value</button>
        </>
    )
}

//When I press change value btn, it changes the value of p in this page and also h2 in about's page because they share context.