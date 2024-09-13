"use client"

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  type?: "primary" | "secondary";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  type = "primary",
  asChild
}: LoginButtonProps) => {

  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  }

  if (mode === "modal") {
    return (
      <span>
        TODO: Implement the modal component
      </span>
    )
  }
  return (
    <span
      onClick={onClick}
      className={cn(
        "cursor-pointer border border-zinc-300 rounded-md px-6 py-2",
        type === 'primary' ? 'bg-primary text-white' : ''
      )}>
      {children}
    </span>
  );
}

export default LoginButton;