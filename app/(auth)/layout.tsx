import Navbar from "../navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="m-6">{children}</div>
    </>
  );
}
