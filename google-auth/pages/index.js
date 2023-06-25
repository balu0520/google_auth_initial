import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Login from './login'
import User from './user'

export default function Home() {
  const router = useRouter();
  const {data:session} = useSession()

  if(session){
    return <User />
  }else{
    return <Login />
  }
  
}
