"use client"

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Social = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="border-b border-zinc-300 w-2/5"></div>
        <span className="text-zinc-500">Or</span>
        <div className="border-b border-zinc-300 w-2/5"></div>
      </div>
      <div className="flex items-center w-full gap-x-2">
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => { }}
        >
          <FcGoogle className="w-5 h-5 " />
        </Button>
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => { }}
        >
          <FaApple className="w-5 h-5 " />
        </Button>
      </div>
    </div>
  );
}

export default Social;