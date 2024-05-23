import AppBar from "@/components/common/AppBar";
import { candidateAppbarMenu } from "@/constants";

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AppBar menuItems={candidateAppbarMenu} authStatus />
      {children}
    </main>
  );
}
