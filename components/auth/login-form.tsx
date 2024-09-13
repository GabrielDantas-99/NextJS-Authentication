"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardWrapper from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";

export function LoginForm() {

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values)
  }

  return (
    <CardWrapper
      headerTitle="Login"
      headerLabel="Enter your email below to login to your account"
      backButtonLabel={"Don't have an account? Sign Up"}
      backButtonRef={""}
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="m@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage className="!-mb-6" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage className="!-mb-6" />
                </FormItem>
              )}
            />
            <FormError message="" />
            <FormSuccess message="" />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
}

{/* <div className="grid gap-2">
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
          </div> */}

