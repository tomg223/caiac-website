// app/layout.js
import "./globals.css"; // optional global CSS
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Columbia AI Safety",
  description: "Website for the Columbia AI Safety Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: "2rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
