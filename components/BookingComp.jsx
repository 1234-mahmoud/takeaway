"use client";
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Lobster } from "next/font/google";
import Button from "./Button";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/data/translations";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const BookingComp = () => {
  const mapRef = useRef(null);
  const { lang } = useLanguage();
  const t = translations[lang];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    time: "",
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      version: "weekly",
    });

    loader.load().then(() => {
      new google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 15,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c9c9c9" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
          },
        ],
      });
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        guests: "",
        date: "",
        time: "",
        specialRequests: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: lang === "ar" ? "العنوان" : "Address",
      content:
        lang === "ar"
          ? "١٢٣ الشارع الرئيسي، المدينة، البلد"
          : "123 Main Street, City, Country",
    },
    {
      icon: <FaPhone />,
      title: lang === "ar" ? "الهاتف" : "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: <FaEnvelope />,
      title: lang === "ar" ? "البريد الإلكتروني" : "Email",
      content: "info@takeaway.com",
    },
    {
      icon: <FaClock />,
      title: lang === "ar" ? "ساعات العمل" : "Hours",
      content: lang === "ar" ? "١٠:٠٠ ص - ١٠:٠٠ م" : "10:00 AM - 10:00 PM",
    },
  ];

  if (submitSuccess) {
    return (
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className={`${lobster.className} text-4xl text-green-600 mb-4`}>
              {lang === "ar" ? "تم الحجز بنجاح!" : "Booking Successful!"}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {lang === "ar"
                ? "شكراً لك! تم تأكيد حجزك. سنتواصل معك قريباً لتأكيد التفاصيل."
                : "Thank you! Your booking has been confirmed. We'll contact you soon to confirm the details."}
            </p>
            <Button
              variant="primary"
              onClick={() => setSubmitSuccess(false)}
              className="px-8 py-3"
            >
              {lang === "ar" ? "حجز آخر" : "Book Another"}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`${lobster.className} text-5xl md:text-6xl text-[var(--primary)] mb-6`}
          >
            {t.booking.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {lang === "ar"
              ? "احجز طاولتك الآن واستمتع بتجربة طعام استثنائية في أجواء مريحة ومريحة"
              : "Book your table now and enjoy an exceptional dining experience in a comfortable and relaxing atmosphere"}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 h-fit sticky top-8">
              <h3
                className={`${lobster.className} text-2xl text-[var(--primary)] mb-6`}
              >
                {lang === "ar" ? "معلومات الاتصال" : "Contact Information"}
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--primary)] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">
                  {lang === "ar" ? "موقعنا" : "Our Location"}
                </h4>
                <div
                  ref={mapRef}
                  className="w-full h-48 rounded-2xl overflow-hidden border-2 border-gray-200"
                />
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h3
                className={`${lobster.className} text-3xl text-[var(--primary)] mb-8`}
              >
                {lang === "ar" ? "تفاصيل الحجز" : "Booking Details"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t.booking.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      placeholder={t.booking.namePlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t.booking.phone} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      placeholder={t.booking.phonePlaceholder}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    {t.booking.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder={t.booking.emailPlaceholder}
                  />
                </div>

                {/* Booking Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {t.booking.guests} *
                    </label>
                    <div className="relative">
                      <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">{t.booking.guestsPlaceholder}</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {lang === "ar" ? "التاريخ" : "Date"} *
                    </label>
                    <div className="relative">
                      <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      {lang === "ar" ? "الوقت" : "Time"} *
                    </label>
                    <div className="relative">
                      <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        min="10:00"
                        max="22:00"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    {lang === "ar" ? "طلبات خاصة" : "Special Requests"}
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-none"
                    placeholder={
                      lang === "ar"
                        ? "أي طلبات خاصة أو ملاحظات..."
                        : "Any special requests or notes..."
                    }
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        {lang === "ar" ? "جاري الحجز..." : "Booking..."}
                      </div>
                    ) : (
                      t.booking.bookNow
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingComp;
