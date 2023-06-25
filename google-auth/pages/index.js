import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Login from './login'

export default function Home() {
  const router = useRouter();
  const {data:session} = useSession()

  useEffect(() => {
    if(session){
      router.push('/user')
    }
  })

  
  return (
    <Login />
  )
}
