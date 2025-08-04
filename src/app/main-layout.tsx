"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function MainClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const excludePaths = ['/auth/sign-in', '/auth/sign-up', '/auth/forgot'];
  const showLayout = !excludePaths.includes(pathname);
 
  return (
    <>
      {showLayout && <Navbar/>}
      {children}
      {showLayout && <Footer />}
    </>
  );
}