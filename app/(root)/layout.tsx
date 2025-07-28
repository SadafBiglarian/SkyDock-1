import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className=" bg-[#E6EDEF]">{children}</main>

      <Footer />
    </>
  );
}
