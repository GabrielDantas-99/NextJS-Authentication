import { auth } from "@/auth";
import MainSidebar from "./_components/main-sidebar";
import { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";


const ProtectedLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <div className="flex h-screen">
        {session?.user && <MainSidebar user={session.user} />}
        <main>
          {children}
        </main>
      </div>
    </SessionProvider>
  );
}

export default ProtectedLayout;