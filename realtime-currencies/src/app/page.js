'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {useState, useEffect} from 'react'


export default function Home() {
  const [data, setData] = useState({})


  useEffect(()=>{
   async function getInfo(){
    // const API_KEY = "nmgY9DpvofPAy6ntNUrKADFnTu8o2XmO"
      try{
        const data = await fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/minute/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=nmgY9DpvofPAy6ntNUrKADFnTu8o2XmO`)
        const jsonData = await data.json()
        setData(jsonData)
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
      {/* <h2>{pokeData.name}</h2>
      <img src={pokeData?.sprites?.front_default}style={{height: '400px'}}></img> */}
    </main>
  )
}
