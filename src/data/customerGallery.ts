import { CustomerStory } from "@/types/customer.types";
import { MarqueeItem } from "@/types/marquee";


// Row 1: smaller tiles
export const CUSTOMER_GALLERY_ROW1: MarqueeItem[] = [
  {
    id: "r1-1",
    type: "image",
    imageSrc:
      "https://media3.thrillophilia.com/filestore/jezkw1hz3yrpmiqlbobdguc5f54m_shutterstock_1938178192.jpg?w=1440&dpr=2",
  },
  {
    id: "r1-2",
    type: "image",
    imageSrc:
      "https://www.lovelytrails.com/admin/image.php?path=photouploads%2F17048583927.jpg",
  },
  {
    id: "r1-3",
    type: "image",
    imageSrc:
      "https://go4explore.com/_next/image?url=https%3A%2F%2Fd2qa7a8q0vuocm.cloudfront.net%2Fimages%2F39550020241118085132.png&w=3840&q=75",
  },
  {
    id: "r1-4",
    type: "image",
    imageSrc:
      "https://media3.thrillophilia.com/filestore/o53vpvq51a8p0tci6buwp8kavawt_DSC_0003.JPG?w=400&dpr=2",
  },
  {
    id: "r1-5",
    type: "image",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpXEfZ5ZzYHejEpOBgA9IEjmtsRsmTUTmHQ&s",
  },
];

// Row 2: bigger tiles
export const CUSTOMER_GALLERY_ROW2: MarqueeItem[] = [
  {
    id: "r2-1",
    type: "image",
    imageSrc:
      "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "r2-2",
    type: "image",
    imageSrc:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "r2-3",
    type: "image",
    imageSrc:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "r2-4",
    type: "image",
    imageSrc:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "r2-5",
    type: "image",
    imageSrc:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop",
  },
];

export const CUSTOMER_STORIES: CustomerStory[] = [
  {
    id: "1",
    customerName: "Steve Harrington",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/5/5c/Steve_-_Season_4.jpg/revision/latest/scale-to-width-down/1000?cb=20220719024524",
    storyThumbnail: "https://hikerwolf.com/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-02-at-7.18.33-PM.jpeg",
    storyMedia: "https://static.vecteezy.com/system/resources/previews/034/138/597/mp4/snow-hill-nature-free-video.mp4",
    storyType: "video",
    caption: "Kathmandu sunrise!",
  },
  {
    id: "2",
    customerName: "Dustin Henderson",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/7/7b/Dustin_S3.png/revision/latest/scale-to-width-down/1000?cb=20230329233607",
    storyThumbnail: "https://img.freepik.com/free-photo/young-hipster-beautiful-couple-love-sitting-road_285396-2240.jpg?semt=ais_hybrid&w=740&q=80",
    storyMedia: "https://img.freepik.com/free-photo/young-hipster-beautiful-couple-love-sitting-road_285396-2240.jpg?semt=ais_hybrid&w=740&q=80",
    storyType: "image",
    caption: "Swiss Alps adventure.",
  },
  {
    id: "3",
    customerName: "Eleven",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/6/62/Eleven_S2_revised.png/revision/latest?cb=20171124231338",
    storyThumbnail: "https://eastasiaforum.org/wp-content/uploads/2024/02/2023-03-29T173146Z_738817611_RC2G30APFY3Z_RTRMADP_3_JAPAN-DAILYLIFE-1024x673.jpg",
    storyMedia: "https://eastasiaforum.org/wp-content/uploads/2024/02/2023-03-29T173146Z_738817611_RC2G30APFY3Z_RTRMADP_3_JAPAN-DAILYLIFE-1024x673.jpg",
    storyType: "image",
    caption: "Japan in motion.",
  },
  {
    id: "CS000010",
    customerName: "Mike Wheeler",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/f/f0/Mike_Wheeler_S3.png/revision/latest?cb=20190918231339",
    storyThumbnail: "https://img.freepik.com/premium-vector/vector-young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-12445.jpg?semt=ais_hybrid&w=740&q=80",
    storyMedia: "https://www.w3schools.com/html/mov_bbb.mp4",
    storyType: "video",
    caption: "Japan in motion.",
  },
  {
    id: "4",
    customerName: "Lucas Sinclair",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/b/b4/Lucas_S4.png/revision/latest/scale-to-width-down/1000?cb=20230602174909",
    storyThumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600",
    storyMedia: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
    storyType: "image",
    caption: "Icelandic dreams.",
  },
  {
    id: "5",
    customerName: "Max Mayfield",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/7/73/Max_Mayfield_-_S3.png/revision/latest?cb=20220731231457",
    storyThumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600",
    storyMedia: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
    storyType: "image",
    caption: "Patagonia trek.",
  },
  {
    id: "6",
    customerName: "Will Byers",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/b/bd/Will_Byers_S2.jpg/revision/latest?cb=20221219230515",
    storyThumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=600",
    storyMedia: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1200",
    storyType: "image",
    caption: "Desert festival in Rajasthan.",
  },
  {
    id: "7",
    customerName: "Nancy Wheeler",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/7/7f/NancyWheeler.png/revision/latest?cb=20160819170317",
    storyThumbnail: "https://images.unsplash.com/photo-1465156799763-2c087c332922?q=80&w=600",
    storyMedia: "https://images.unsplash.com/photo-1465156799763-2c087c332922?q=80&w=1200",
    storyType: "image",
    caption: "Sahara sunset ride.",
  },
  {
    id: "8",
    customerName: "Billy Hargrove",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/6/65/Billy_Hargrove.png/revision/latest?cb=20220715152521",
    storyThumbnail: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=600",
    storyMedia: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200",
    storyType: "image",
    caption: "Venetian gondola day.",
  },
  {
    id: "9",
    customerName: "Jonathan Byers",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/5/50/Jonathan_in_Season_Four.png/revision/latest/scale-to-width-down/1000?cb=20220630040241",
    storyThumbnail: "https://media.istockphoto.com/id/508156356/photo/aircraft-wing.jpg?s=612x612&w=0&k=20&c=0SAChAa9WNfwtdCxtuVgro7MoZj5VfHtuXWccVEK0l4=",
    storyMedia: "https://dev-bucket-outbound.s3.ap-south-1.amazonaws.com/test/samplevideo.webm",
    storyType: "video",
    caption: "Grand Canyon hike.",
  },
  {
    id: "10",
    customerName: "Robin Buckley",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/e/ea/Robin_Buckley_-_alt_S3_portrait.png/revision/latest?cb=20250926175652",
    storyThumbnail: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=600",
    storyMedia: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1200",
    storyType: "image",
    caption: "Marrakech market colors.",
  },
  {
    id: "11",
    customerName: "Eddie Munson",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/c/ca/Eddie_Munson.jpg/revision/latest?cb=20220608205857",
    storyThumbnail: "https://images.pexels.com/photos/358235/pexels-photo-358235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    storyMedia: "https://dev-bucket-outbound.s3.ap-south-1.amazonaws.com/test/sample2video.webm",
    storyType: "video",
    caption: "Rio carnival night.",
  },
  {
    id: "12",
    customerName: "Argyle",
    customerImage: "https://static.wikia.nocookie.net/strangerthings8338/images/4/47/Argyle_S4.png/revision/latest/scale-to-width-down/1000?cb=20220909212533",
    storyThumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=600",
    storyMedia: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1200",
    storyType: "image",
    caption: "Parisian café morning.",
  },
];