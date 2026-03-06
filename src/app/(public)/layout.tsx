import { PublicNavbar } from "@/app/(public)/_components/PublicNavbar";
import Footer from "@/app/(public)/_components/Footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto w-full flex-1 h-[calc(100vh-72px-330px)]">
      <PublicNavbar />
      {children}
      <Footer />
    </main>
  );
}
