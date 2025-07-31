import Menu from "@/components/Menu";

export const metadata = {
  title: "Menu",
  description:
    "Explore our delicious menu featuring fresh burgers, authentic pizzas, homemade pasta, and crispy fries. Order online for fast delivery or dine-in experience.",
  keywords: [
    "menu",
    "food menu",
    "burgers",
    "pizza",
    "pasta",
    "fries",
    "restaurant menu",
    "online food ordering",
  ],
  openGraph: {
    title: "Our Menu - Takeaway",
    description:
      "Explore our delicious menu featuring fresh burgers, authentic pizzas, homemade pasta, and crispy fries.",
    url: "https://takeaway.com/menu",
    images: [
      {
        url: "/f1.png",
        width: 1200,
        height: 630,
        alt: "Takeaway Menu",
      },
    ],
  },
  alternates: {
    canonical: "/menu",
  },
};

const MenuPage = () => {
  return <Menu />;
};

export default MenuPage;
