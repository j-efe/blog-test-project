import {Container,PostAutor, PostContent, FooterPost} from "./styles";
import {AiOutlineEye} from 'react-icons/ai'
import {IoChatboxOutline} from 'react-icons/io5'

import {Post} from '@/schemas/Posts';
import { useEffect, useState } from "react";
import { User } from "@/schemas/User";
import api from "@/services/api";
import { useRouter } from "next/router";


export default function PostBox({id,userId,body,title}: Post) {

  const [user, setUser] = useState<User>()

  async function getUser() {
    try {
      const {data}: {data: User} = await api.get(`/users/${userId}`)
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  const router = useRouter() 

  useEffect(() => {
    getUser();
  },[]);


  return (
    <Container onClick={(() => {
      router.push(`/post/${id}`)
    })}>
      <PostAutor>
        <h1>{`${user?.name} (${user?.username})`}</h1>
        <p>2 de abr. de 2023</p>  {/* exemplo de como ficaria data do post */}
      </PostAutor>

      <PostContent>
        <h1>{title}</h1>
        <p>{body}</p>
      </PostContent>

      <FooterPost>
        <div className="iconsContainer">
        <AiOutlineEye className="iconStyle"/>
        <p>1</p>
        </div>

        <div className="iconsContainer">
        <IoChatboxOutline className="iconStyle"/>
        <p>5</p>
        </div>
      </FooterPost>
    </Container>
  );
}