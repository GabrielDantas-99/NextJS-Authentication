import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CardWrapper from "@/components/auth/card-wrapper";
import Link from "next/link";

export function LoginForm() {
  return (
    <CardWrapper
      headerTitle="Login"
      headerLabel="Enter your email below to login to your account"
      backButtonLabel={"Don't have an account? Sign Up"}
      backButtonRef={""}
      showSocial
    >
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </CardWrapper>
  );
}