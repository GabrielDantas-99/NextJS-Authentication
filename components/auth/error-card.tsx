import { Card, CardFooter, CardHeader } from "../ui/card";
import Header from "@/components/auth/header";
import BackButton from "./back-button";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <ExclamationTriangleIcon className="text-destructive w-14 h-14 mx-auto" />
        <Header headerTitle="Oops! Something went wrong!" headerLabel="We already working on this error ;)" />
      </CardHeader>
      <CardFooter>
        <BackButton href={"/auth/login"} label={"Back to Login"} />
      </CardFooter>
    </Card>
  );
}

export default ErrorCard;