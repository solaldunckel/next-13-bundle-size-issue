import { SignIn, auth } from "@clerk/nextjs/app-beta";
import Link from "next/link";

export default function Home() {
  const { userId } = auth();

  if (!userId) {
    return <SignIn />;
  }

  return <div><Link href="/protected">Go to protected page</Link></div>;
}
