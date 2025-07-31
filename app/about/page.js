import AboutComp from "@/components/AboutComp";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Takeaway - our story, mission, and commitment to serving fresh, high-quality food with exceptional service. Discover what makes us different.",
  keywords: [
    "about us",
    "our story",
    "restaurant history",
    "food quality",
    "service commitment",
    "takeaway restaurant",
  ],
  openGraph: {
    title: "About Us - Takeaway",
    description:
      "Learn about Takeaway - our story, mission, and commitment to serving fresh, high-quality food with exceptional service.",
    url: "https://takeaway.com/about",
    images: [
      {
        url: "/meal.jpg",
        width: 1200,
        height: 630,
        alt: "About Takeaway",
      },
    ],
  },
  alternates: {
    canonical: "/about",
  },
};

const About = () => {
  return (
    <div className={`bg-gray-800 h-lvh`}>
      <AboutComp />
    </div>
  );
};

export default About;
