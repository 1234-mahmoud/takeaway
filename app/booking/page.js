import BookingComp from "@/components/BookingComp";

export const metadata = {
  title: "Book a Table",
  description:
    "Reserve your table at Takeaway for an unforgettable dining experience. Easy online booking with real-time availability and Google Maps integration.",
  keywords: [
    "book table",
    "restaurant reservation",
    "dining booking",
    "table reservation",
    "online booking",
    "restaurant booking",
  ],
  openGraph: {
    title: "Book a Table - Takeaway",
    description:
      "Reserve your table at Takeaway for an unforgettable dining experience. Easy online booking with real-time availability.",
    url: "https://takeaway.com/booking",
    images: [
      {
        url: "/mealbg.png",
        width: 1200,
        height: 630,
        alt: "Book a Table at Takeaway",
      },
    ],
  },
  alternates: {
    canonical: "/booking",
  },
};

const Booking = () => {
  return (
    <div>
      <BookingComp />
    </div>
  );
};

export default Booking;
