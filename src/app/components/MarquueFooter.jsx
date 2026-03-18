"use client";

export default function FooterMarquee() {
  const items = [
    {
      title: "Product Design",
      img: "https://cdn.dribbble.com/userupload/18025563/file/original-8921532f920ced8a0e45d580cba5c49f.png",
    },
    {
      title: "Typography",
      img: "https://cdn.dribbble.com/userupload/45110813/file/a14323e6644d4485ee89f540dd058df4.jpg",
    },
    {
      title: "Branding",
      img: "https://cdn.dribbble.com/userupload/46959040/file/ef944b80a46d4e460140df9d47855dcd.jpg",
    },
    {
      title: "Illustration",
      img: "https://cdn.dribbble.com/userupload/41802188/file/original-efc3a09ed287c1cfc32b17ed8463dc59.jpg",
    },
    {
      title: "Web Design",
      img: "https://cdn.dribbble.com/userupload/44841174/file/still-8858a51dce4472159585b86092e4acae.png",
    },
    {
      title: "Animation",
      img: "https://cdn.dribbble.com/userupload/21255757/file/still-531e411b1b8982404d70aae10ed85d40.gif",
    },
    {
      title: "Mobile",
      img: "https://cdn.dribbble.com/userupload/45854573/file/70a6cbc104791ba4ae64fcf8ef4d13d5.png",
    },
  ];

  return (
    <div className="container mx-auto overflow-hidden py-6 bg-white">
      <div className="flex gap-6 marquee">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="min-w-[200px] cursor-pointer group"
          >
            <div className="rounded-md overflow-hidden shadow-sm">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[150px] object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <p className="mt-2 text-sm font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}