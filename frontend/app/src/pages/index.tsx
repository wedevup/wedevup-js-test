import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CarCard } from "../components/CarCard";
import type { CarInfo } from "../types/CarInfo";
import axios from 'axios'

const Home: NextPage = () => {
  const [cars, setCars] = useState<CarInfo[]>([])
  const [days, setDays] = useState("")
  const [distance, setDistance] = useState("")


  useEffect(() => {

    axios.get(`http://localhost:3001/cars`, {
      params: { days, distance }
    }).then((response) => {
      const fetchedCars = response.data
      setCars(fetchedCars)
    })

  }, [setCars, days, distance])

  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>
      <main className="flex py-10 gap-8 min-h-screen flex-col items-center justify-center bg-slate-700 text-white">
        <section className="flex flex-col gap-3 w-full px-10 pt-4">
          <h3 className="text-3xl mb-2" >Filters</h3>
          <label className="flex flex-col gap-1">
            <span className="select-none">Days</span>
            <input className="bg-transparent ring-1 ring-blue-300 px-2 py-1 rounded outline-none max-w-xl" type="number" id="duration" value={days} onChange={({ target }) => {setDays(target.value) }} /> 
          </label>

          <label className="flex flex-col gap-1">
            <span className="select-none">Distance</span>
            <input className="bg-transparent ring-1 ring-blue-300 px-2 py-1 rounded outline-none max-w-xl"  type="number" id="distance" value={distance} onChange={({ target }) => {setDistance(target.value) }} />
          </label>
          
        </section>
        <section id="cars" className="flex flex-col gap-5 px-10 py-4 ">
          <h2 className="text-3xl">Cars</h2>
          <div className="flex flex-wrap w-full gap-5 justify-between">
            {cars.map(car => (<CarCard key={car.id} {...car} />))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
