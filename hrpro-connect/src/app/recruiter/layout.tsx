import AppBar from "@/components/common/AppBar";
import { RecruiterAppBarMenu } from "@/constants/recruiter";

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <AppBar menuItems={RecruiterAppBarMenu} authStatus />
      {children}
    </main>
  );
}
