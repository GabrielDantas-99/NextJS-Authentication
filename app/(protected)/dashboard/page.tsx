import { auth } from "@/auth";


export default async function DashboardPage() {
  const session = await auth();
  return (
    <div>
      DashboardPage
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}