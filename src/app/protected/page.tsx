import { auth } from "@clerk/nextjs/app-beta";
import { redirect } from "next/navigation";

export default function Page() {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  return <div>Secret message: Hello world !</div>;
}
