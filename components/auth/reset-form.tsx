"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardWrapper from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { ResetSchema } from "@/schemas";
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
import { useState, useTransition } from "react";
import { reset } from "@/actions/reset";

export function ResetForm() {

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    }
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      reset(values).then((data: any) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <CardWrapper
      headerTitle="Forgot your password?"
      headerLabel="Complete the fields below to recover your password."
      backButtonLabel="Back to login"
      backButtonRef="/auth/login"
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
                      disabled={isPending}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage className="!-mb-6" />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type="submit" className="w-full">
              Send reset email
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
}