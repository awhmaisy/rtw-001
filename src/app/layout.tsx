import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-['Times_New_Roman'] flex">
        <div className="w-1/2">
          {children}
        </div>
        <div className="w-1/2 p-4">
        </div>
      </body>
    </html>
  );
}
