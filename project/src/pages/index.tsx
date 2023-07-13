import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect } from "react";


export default function Home() {
  
  const router = useRouter();

  useEffect(() => {
    router.push("/main-view")
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  )
}
