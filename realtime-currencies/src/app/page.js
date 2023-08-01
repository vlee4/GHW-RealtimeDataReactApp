'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {useState, useEffect} from 'react'


export default function Home() {
  const [pokeData, setPokeData] = useState({})


  useEffect(()=>{
   async function getInfo(){
      try{
        const pokeData = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const jsonData = await pokeData.json()
        setPokeData(jsonData)
        console.log(jsonData)
      } catch(err){
        console.error(err)
      }
    }
    getInfo()
  },[])


  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <h2>{pokeData.name}</h2>
      <img src={pokeData?.sprites?.front_default}style={{height: '400px'}}></img>
    </main>
  )
}
