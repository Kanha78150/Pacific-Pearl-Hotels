import Card from "../ui/Card";

export default function HotelCard() {
  const hotels = [
    {
      name: "Hilton Garden Inn Phoenix Midtown",
      location: "Phoenix, AZ",
      phone: "(602) 279-9811",
      rating: "3-Star Hotel",
      rooms: 342,
      image: "/images/CardImg.png",
    },

    {
      name: "Hilton Garden Inn Phoenix Midtown",
      location: "Phoenix, AZ",
      phone: "(602) 279-9811",
      rating: "3-Star Hotel",
      rooms: 342,
      image: "/images/CardImg.png",
    },
    {
      name: "Hilton Garden Inn Phoenix Midtown",
      location: "Phoenix, AZ",
      phone: "(602) 279-9811",
      rating: "3-Star Hotel",
      rooms: 342,
      image: "/images/CardImg.png",
    },
    {
      name: "Hilton Garden Inn Phoenix Midtown",
      location: "Phoenix, AZ",
      phone: "(602) 279-9811",
      rating: "3-Star Hotel",
      rooms: 342,
      image: "/images/CardImg.png",
    },
    {
      name: "Hilton Garden Inn Phoenix Midtown",
      location: "Phoenix, AZ",
      phone: "(602) 279-9811",
      rating: "3-Star Hotel",
      rooms: 342,
      image: "/images/CardImg.png",
    },
    {
      name: "Hilton Garden Inn Phoenix Midtown",
      location: "Phoenix, AZ",
      phone: "(602) 279-9811",
      rating: "3-Star Hotel",
      rooms: 342,
      image: "/images/CardImg.png",
    },
  ];

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel, i) => (
          <Card key={i} {...hotel} />
        ))}
      </div>
    </main>
  );
}
