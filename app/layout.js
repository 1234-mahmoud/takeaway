// app/layout.js
import "./globals.css";
import { Creepster } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { SearchProvider } from "@/contexts/SearchContext";
import SearchModal from "@/components/SearchModal";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageWrapper } from "@/components/LanguageWrapper";

const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creepster",
});

export const metadata = {
  title: {
    default: "Takeaway - Fresh Food Delivery & Restaurant Booking",
    template: "%s | Takeaway",
  },
  description:
    "Order fresh, delicious food online from Takeaway. We offer burgers, pizzas, pasta, and more with fast delivery and easy online booking. Available in English and Arabic.",
  keywords: [
    "food delivery",
    "online food ordering",
    "restaurant booking",
    "takeaway",
    "burgers",
    "pizza",
    "pasta",
    "fast food",
    "delivery service",
  ],
  authors: [{ name: "Takeaway Team" }],
  creator: "Takeaway",
  publisher: "Takeaway",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://takeaway.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "ar-SA": "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://takeaway.com",
    siteName: "Takeaway",
    title: "Takeaway - Fresh Food Delivery & Restaurant Booking",
    description:
      "Order fresh, delicious food online from Takeaway. We offer burgers, pizzas, pasta, and more with fast delivery and easy online booking.",
    images: [
      {
        url: "/meal2.jpg",
        width: 1200,
        height: 630,
        alt: "Takeaway - Fresh Food Delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Takeaway - Fresh Food Delivery & Restaurant Booking",
    description:
      "Order fresh, delicious food online from Takeaway. We offer burgers, pizzas, pasta, and more with fast delivery and easy online booking.",
    images: ["/meal2.jpg"],
    creator: "@takeaway",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  icons: {
    icon: [
      { url: "/icon.jpeg" },
      { url: "/icon.jpeg", sizes: "16x16", type: "image/jpeg" },
      { url: "/icon.jpeg", sizes: "32x32", type: "image/jpeg" },
    ],
    apple: [
      { url: "/icon.jpeg" },
      { url: "/icon.jpeg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  manifest: "/manifest.json",
  category: "food and drink",
};

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Takeaway",
  description:
    "Fresh food delivery and restaurant booking service offering burgers, pizzas, pasta, and more.",
  url: "https://takeaway.com",
  logo: "https://takeaway.com/icon.jpeg",
  image: "https://takeaway.com/meal2.jpg",
  telephone: "+1-555-123-4567",
  email: "info@takeaway.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main Street",
    addressLocality: "City",
    addressRegion: "State",
    postalCode: "12345",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.7749,
    longitude: -122.4194,
  },
  openingHours: "Mo-Su 10:00-22:00",
  priceRange: "$$",
  servesCuisine: ["American", "Italian", "Fast Food"],
  hasMenu: "https://takeaway.com/menu",
  acceptsReservations: true,
  deliveryAvailable: true,
  sameAs: [
    "https://facebook.com/takeaway",
    "https://twitter.com/takeaway",
    "https://instagram.com/takeaway",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${creepster.variable}
    `}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#FF6B35" />
        <meta name="msapplication-TileColor" content="#FF6B35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Takeaway" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Takeaway" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <LanguageWrapper>
            <CartProvider>
              <SearchProvider>
                <Header />
                <main className="flex-1 pt-[60px]">{children}</main>
                <Footer />
                <SearchModal />
              </SearchProvider>
            </CartProvider>
          </LanguageWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
