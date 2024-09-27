"use client"

import { useSearchParams } from "next/navigation";
import Spinner from "@/components/ui/spinner";
import CardWrapper from "@/components/auth/card-wrapper";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import FormError from "@/components/form-error";
import FormSuccess from "@/components/form-success";

const NewVerificationForm = () => {

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token!");
      return;
    };
    newVerification(token)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch(() => {
        setError("Something went wrong!")
      })
  }, [token])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper
      headerTitle={"Confirm your verification"}
      backButtonLabel={"Back to Login"}
      backButtonRef={"/auth/login"}
      headerLabel={""}
    >
      <div className="flex flex-col items-center w-full justify-center">
        {!success && !error && (
          <Spinner />
        )}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
}

export default NewVerificationForm;