import Cart from "@/components/Cart";

export const metadata = {
  title: "Shopping Cart",
  description:
    "Review your order in the Takeaway shopping cart. Add items, modify quantities, and proceed to checkout for fast food delivery.",
  keywords: [
    "shopping cart",
    "order review",
    "checkout",
    "food delivery",
    "online ordering",
  ],
  openGraph: {
    title: "Shopping Cart - Takeaway",
    description:
      "Review your order in the Takeaway shopping cart. Add items, modify quantities, and proceed to checkout.",
    url: "https://takeaway.com/cart",
    images: [
      {
        url: "/f2.png",
        width: 1200,
        height: 630,
        alt: "Takeaway Shopping Cart",
      },
    ],
  },
  alternates: {
    canonical: "/cart",
  },
  robots: {
    index: false,
    follow: false,
  },
};

const CartPage = () => {
  return <Cart />;
};

export default CartPage;
