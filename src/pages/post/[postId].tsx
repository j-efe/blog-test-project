import { Comment } from "@/schemas/Comment";
import api from "@/services/api";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import {Container} from '@/styles/CommentStyle'
import { ContainerGeneral } from "@/styles/GlobalStyle";

export default function Post() {
  const router = useRouter();
  const [comments, setComments] = useState<Comment[]>()
  
  async function getComment() {
    try {
      const {data}: {data: Comment[]} = await api.get(`/posts/${router.query.postId}/comments`)
      setComments(data);      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getComment()
  },[])

  return (
    <ContainerGeneral>
    {comments?.map((comment) => (
      <Container key={comment.id}>
    
      <h1>{comment.name}</h1>
      <p>{comment.body}</p>

      </Container>
    ))}
    </ContainerGeneral>
  )
}