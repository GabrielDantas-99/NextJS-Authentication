"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children
}: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => router.push("/auth/login"))
  return (
    <main className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
      <div className="grid place-items-center py-12 h-full">
        {children}
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </main>
  );
}