'use client';

import { useUser, SignInButton } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) return <p>Cargando...</p>;

  return (
    <main style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Bienvenido a VantageAI</h1>
      <SignInButton />
    </main>
  );
}