import Head from "next/head";
import Link from "next/link";
import { Home } from "../components/Home/Home";


export default function HomePage() {
  return (
    <>
    <Head>
        <title>Henock Beyene Tesfatsion</title>
        <meta name="description" content="Software Developer Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Home/>
   
    </>
  )
      
   
}