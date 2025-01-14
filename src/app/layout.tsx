// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Columbia AI Safety",
  description: "Website for the Columbia AI Safety Club",
  icons: {
    icon: [
      {
        url: '/logo.svg',
        sizes: '64x64',  // You can try different sizes: '32x32', '64x64', '96x96'
        type: 'image/svg+xml'
      }
    ],
    apple: [
      {
        url: '/logo.svg',
        sizes: '128x128',
        type: 'image/svg+xml'
      }
    ]
  }
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
      <Footer></Footer>
    </html>
  );
}