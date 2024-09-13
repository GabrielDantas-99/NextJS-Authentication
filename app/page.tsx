import LoginButton from "@/components/auth/login-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col items-center justify-around h-96 w-96 border rounded-xl p-5">
        <Image width={384} height={384} src={"/undraw/under_construction.svg"} objectFit="cover" alt="Under Construction" />
        <h1 className="text-3xl mt-4 text-slate-600">Site em construção!</h1>
        <div className="flex items-center justify-between">
          <LoginButton>
            <button>
              Login
            </button>
          </LoginButton>
        </div>
      </div>
    </div>
  );
}
