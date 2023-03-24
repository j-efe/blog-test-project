import { ContainerGeneral } from '@/styles/GlobalStyle'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Desafio Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContainerGeneral>
        <h1>Teste</h1>
      </ContainerGeneral>
    </>
  )
}
