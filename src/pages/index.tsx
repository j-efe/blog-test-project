import PostBox from '@/components/PostBox'
import api from '@/services/api';
import { ContainerGeneral } from '@/styles/GlobalStyle'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import {Post} from '@/schemas/Posts';

export default function Home() {

  const [posts, setPosts] = useState<Post[]>()

async function getPosts() {
  try {
    const {data}: {data: Post[]} = await api.get('/posts')
    setPosts(data);
  } catch (error) {
    console.log(error);
  }
}

useEffect(() => {
  getPosts();
},[])

  return (
    <>
      <Head>
        <title>Home | Desafio Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContainerGeneral>
        {posts?.map((post) => (
          <PostBox
          body={post.body}
          title={post.title}
          userId={post.userId}
          id={post.id}
          key={post.id}
          />
        ))}
      </ContainerGeneral>
    </>
  )
}
