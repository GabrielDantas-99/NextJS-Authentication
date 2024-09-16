import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";


export default async function DashboardPage() {
  const session = await auth();
  return (
    <main>
      <header className="bg-blue-200 flex justify-between px-8 py-4">
        <h2>DashboardPage</h2>
        <form action={async () => {
          'use server';

          await signOut();
        }}>
          <Button
            type="submit"
            variant="destructive"
            className="px-4 py-2 border border-zinc-400 rounded"
          >
            Logout
          </Button>
        </form>
      </header>
      <p>{JSON.stringify(session)}</p>
    </main>
  );
}