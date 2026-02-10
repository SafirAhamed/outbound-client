"use client";

import { useState, useEffect } from "react";
import { fetchWithRetry } from "@/src/lib/fetchWithRetry";
import { useAppData } from "@/src/context/AppDataContext";
import type { HomePage } from "@/types/homePage.types";
import { AxiosError } from "axios";

const CACHE_KEY = "homePageCache";
const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

export function useHomePageFetcher(url: string) {
  const { setHomePage } = useAppData();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // --- Always use defaultData for now ---
  const defaultData = {
    "heroBanner": {
      "design": {
        "videoSources": [
          {
            "src": "https://cdn.pixabay.com/video/2021/10/12/91757-636709171_large.mp4",
            "type": "video/mp4",
          },
          {
            "src": "https://static.vecteezy.com/system/resources/previews/034/138/597/webm/snow-hill-nature-free-video.webm",
            "type": "video/webm",
          },
        ],
        "fallbackImage":
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
        "overlay": "medium",
        "titleClasses":
          "text-3xl md:text-5xl lg:text-5xl font-extrabold text-white",
        "subTitleClasses":
          "text-base md:text-lg lg:text-lg font-medium text-white",
        "fontFamily": "",
        "fontUrl": "",
        "heightClass": "h-[60vh] md:h-[65vh] lg:h-[calc(100vh-72px)]",
        "title": "Find Your Next ",
        "rotatedText": [
          "Adventure",
          "Explore",
          "Discover",
          "Travel",
          "Wander",
          "Journey",
        ],
        "subTitle":
          "Explore curated destinations, tailored packages, and unforgettable experiences.",
        "boxBgClass": "bg-black/0",
        "padding": "medium",
        "positionClasses":
          "justify-start items-center text-left md:justify-center md:items-center md:text-center lg:justify-start lg:items-center lg:text-left",
        "titleColorHex": "",
        "subTitleColorHex": "",
      },
    },
    "trendingDestinations": [
      {
        "_id": "694fb74f38ad2800043f9c88",
        "name": "Bali",
        "tagLine": "Island of the Gods",
        "locale": "Indonesia",
        "meta": "Indonesia, Bali image",
        "image":
          "https://marketplace.canva.com/EAFbHYxdwws/1/0/1280w/canva-purple-photo-bali-island-instagram-post-0SLsu7XSPDg.jpg",
      },
      {
        "_id": "694fb74f38ad2800043f9c89",
        "name": "Paris",
        "tagLine": "City of Lights",
        "locale": "France",
        "meta": "France, Paris image",
        "image": "https://cdn.wallpapersafari.com/42/21/86fiXm.jpg",
      },
      {
        "_id": "694fb74f38ad2800043f9c8a",
        "name": "Maldives",
        "tagLine": "Tropical Luxury",
        "locale": "Indian Ocean",
        "meta": "Maldives tropical resort image",
        "image":
          "https://cdn1.tripoto.com/media/filter/nxxl/img/747480/Image/1585550743_10.jpg.webp",
      },
      {
        "_id": "694fb74f38ad2800043f9c8b",
        "name": "Tokyo",
        "tagLine": "Neon Metropolis",
        "locale": "Japan",
        "meta": "Japan, Tokyo city image",
        "image":
          "https://images.squarespace-cdn.com/content/v1/535a8b5ee4b00a1a8a7975e6/1536292299197-QIO8W4LZATEQRXUOOLUB/Managing+to+find+a+few+rooftops+that+where+easy-ish+to+access%2C+I+ended+up+sleeping+on+one+with+Tokyo+Tower+providing+an+dreamy+view+to+drift+off+to+and..",
      },
      {
        "_id": "694fb74f38ad2800043f9c8c",
        "name": "Dubai",
        "tagLine": "Futuristic Oasis",
        "locale": "UAE",
        "meta": "UAE, Dubai skyline image",
        "image":
          "https://images.playground.com/7a4997c5-6ce1-4fee-8573-21f51cdb8cce.jpeg",
      },
      {
        "_id": "694fb74f38ad2800043f9c8d",
        "name": "New York",
        "tagLine": "The Big Apple",
        "locale": "USA",
        "meta": "USA, New York city image",
        "image":
          "https://m.media-amazon.com/images/I/61Mc89sEO1L._AC_UF894,1000_QL80_.jpg",
      },
      {
        "_id": "694fb74f38ad2800043f9c8e",
        "name": "Manali",
        "tagLine": "Himalayan Getaway",
        "locale": "India",
        "meta": "India, Manali mountains image",
        "image":
          "https://cdn1.tripoto.com/media/filter/tst/img/1429685/Image/1573741940_manali.jpg.webp",
      },
      {
        "_id": "694fb74f38ad2800043f9c8f",
        "name": "Kochin",
        "tagLine": "Queen of the Arabian Sea",
        "locale": "India",
        "meta": "India, Kochin backwaters image",
        "image":
          "https://i.ytimg.com/vi/7906oqpuP60/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDnCjaGVWNz36Dsf4G-2vcvd3rOnw",
      },
      {
        "_id": "694fb74f38ad2800043f9c90",
        "name": "Munnar",
        "tagLine": "Tea Garden Hills",
        "locale": "India",
        "meta": "India, Munnar tea plantations image",
        "image":
          "https://abhinavs.epizy.com/wp-content/uploads/2022/08/original-1024x727.jpg",
      },
      {
        "_id": "694fb74f38ad2800043f9c91",
        "name": "Taj Mahal",
        "tagLine": "Symbol of Love",
        "locale": "India",
        "meta": "India, Taj Mahal Agra image",
        "image":
          "https://theurgetowander.com/wp-content/uploads/2013/11/taj-mahal-india-travel-copy.jpg",
      },
    ],
    "companyStats": {
      "companyStatsSection": {
        "title": "Why choose outbound travelers?",
        "description":
          "Why We’re Your Perfect Travel Partner Thoughtfully crafted journeys, expert planning, and complete travel support designed around you.",
      },
      "companyStatsCards": [
        {
          "id": "destinations",
          "label": "Destinations",
          "value": 126,
          "suffix": "+",
          "icon": "Globe2",
        },
        {
          "id": "explorers",
          "label": "Happy Explorers",
          "value": 20000,
          "suffix": "+",
          "icon": "Users",
        },
        {
          "id": "partners",
          "label": "Tour Partners",
          "value": 16,
          "suffix": "+",
          "icon": "Handshake",
        },
        {
          "id": "followers",
          "label": "Followers",
          "value": 300000,
          "suffix": "+",
          "icon": "Heart",
        },
      ],
    },
    "videoCardData": {
      "id": "discover-more",
      "poster":
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
      "videoSources": [
        // { src: "https://cdn.pixabay.com/video/2021/10/12/91757-636709171_large.mp4", type: "video/mp4" },
        {
          "src": "https://static.vecteezy.com/system/resources/previews/034/138/597/mp4/snow-hill-nature-free-video.mp4",
          "type": "video/mp4",
        },
        {
          "src": "https://cdn.pixabay.com/video/2021/10/12/91757-636709171_large.webm",
          "type": "video/webm",
        },
      ],
      "videoSrc":
        "https://static.vecteezy.com/system/resources/previews/034/138/597/mp4/snow-hill-nature-free-video.mp4",
      "heading": "Elevate Every Journey",
      "subheading": "Deep Insights. Smarter Planning.",
      "description":
        "Unlock destination intelligence, seasonal safir timing guides, local immersion strategies, and partner perks curated for modern explorers.",
      "ctaText": "Learn More",
      "ctaHref": "/discover",
      "colors": {
        "heading": "#FFFFFF",
        "subheading": "#F3F4F6",
        "description": "#E5E7EB",
        "ctaBg": "#06a15c",
        "ctaText": "#FFFFFF",
        "overlayFrom": "rgba(0,0,0,0.65)",
        "overlayTo": "rgba(0,0,0,0.25)",
      },
      "size": {
        "height": "420px",
        "minHeight": "360px",
      },
      "align": "left",
    },
    "exclusiveOffers": [
      {
        "_id": 1,
        "img_src":
          "https://afar.brightspotcdn.com/dims4/default/0c01054/2147483647/strip/true/crop/3000x1592+0+323/resize/2880x1528!/format/webp/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fb2%2Ff4%2F9a1ebe3f427f8e5eb937f8df8998%2Ftravelguides-maldives-videomediastudioeurope-shutterstock.jpg",
        "title": "Maldives Islands Getaway",
        "subtitle": "Limited-time savings on curated trips.",
        "buttonText": "View Offer",
        "link": "/packages",
        "titleColor": "#FFFFFF",
        "subtitleColor": "rgba(255,255,255,0.9)",
        "buttonColor": "#06a15c",
        "buttonTextColor": "#ffffff",
        "contentPosition": "bottom-left",
        "overlay": "40",
        "alt": "Exclusive offer banner",
      },
      {
        "_id": 2,
        "img_src":
          "https://dynamic-media.tacdn.com/media/photo-o/2e/f9/36/f4/caption.jpg?w=1400&h=1000&s=1",
        "title": "The Gate of Heaven and East Bali Trip",
        "subtitle": "Handpicked experiences for your next Bali trip.",
        "buttonText": "Explore",
        "link": "/packages",
        "titleColor": "#FFFFFF",
        "subtitleColor": "rgba(255,255,255,0.9)",
        "buttonColor": "#052210",
        "buttonTextColor": "#ffffff",
        "contentPosition": "middle-center",
        "overlay": "60",
        "alt": "Travel background",
      },
      {
        "_id": 3,
        "img_src":
          "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/malaysia-tour-highlights-1502178114-785X440.jpg?width=1536&quality=75",
        "title": "Kek Lok Si in Penang of Malaysia",
        "subtitle": "Exclusive cash value offers on select packages.",
        "buttonText": "See Deals",
        "link": "/packages",
        "titleColor": "#052210",
        "subtitleColor": "#052210",
        "buttonColor": "#06a15c",
        "buttonTextColor": "#ffffff",
        "contentPosition": "top-left",
        "overlay": "20",
        "alt": "Exclusive cash value",
      },
      {
        "_id": 4,
        "img_src":
          "https://content.r9cdn.net/rimg/dimg/a9/dd/d6b29241-city-44818-166a7453734.jpg?width=1366&height=768&xhint=1600&yhint=1049&crop=true",
        "title": "Munnar Hill Station Retreat",
        "subtitle": "Exclusive deals on scenic hill stations.",
        "buttonText": "Book Now",
        "link": "/packages",
        "titleColor": "#FFFFFF",
        "subtitleColor": "rgba(255,255,255,0.9)",
        "buttonColor": "#06a15c",
        "buttonTextColor": "#ffffff",
        "contentPosition": "bottom-right",
        "overlay": "40",
        "alt": "Travel partners",
      },
    ],
    "quotes": [
      "The world is a book and those who do not travel read only one page.",
      "Traveling – it leaves you speechless, then turns you into a storyteller.",
    ],
    "planYourTrip": {
      "badgeText": "Plan better, travel happier",
      "title": "Your trip planned like a concierge",
      "description":
        "People don’t just want destinations, they want clarity. This is how we turn “I want to travel” into an itinerary that feels effortless.",

      "trustPoints": [
        {
          "icon": "ShieldCheck",
          "label": "Transparent guidance",
        },
        {
          "icon": "Sparkles",
          "label": "Curated experiences",
        },
        {
          "icon": "CalendarDays",
          "label": "Flexible planning",
        },
        {
          "icon": "Headset",
          "label": "Support when you need",
        },
      ],

      "primaryCta": {
        "label": "Explore packages",
        "href": "/packages",
        "icon": "ArrowRight",
      },

      "secondaryCta": {
        "label": "Talk to us",
        "href": "/contact",
      },

      "steps": [
        {
          "icon": "MapPinned",
          "title": "Tell us your vibe",
          "description":
            "Destination, dates, budget, and the kind of trip you want we’ll tailor it.",
        },
        {
          "icon": "Sparkles",
          "title": "We curate your plan",
          "description":
            "We shortlist stays, experiences, and routes that match your style and pace.",
        },
        {
          "icon": "Headset",
          "title": "Travel with confidence",
          "description":
            "Get help before you fly and while you’re away so the trip stays smooth.",
        },
      ],
    },
    "customerGallery": {
      "ctaText": {
        "title": "Happy Customers",
        "subtitle":
          "Moments shared from recent journeys. Real places. Real smiles.",
      },
      "galleryItems": [
        {
          "id": "r1-1",
          "type": "image",
          "imageSrc":
            "https://media3.thrillophilia.com/filestore/jezkw1hz3yrpmiqlbobdguc5f54m_shutterstock_1938178192.jpg?w=1440&dpr=2",
        },
        {
          "id": "r1-2",
          "type": "image",
          "imageSrc":
            "https://www.lovelytrails.com/admin/image.php?path=photouploads%2F17048583927.jpg",
        },
        {
          "id": "r1-3",
          "type": "image",
          "imageSrc":
            "https://go4explore.com/_next/image?url=https%3A%2F%2Fd2qa7a8q0vuocm.cloudfront.net%2Fimages%2F39550020241118085132.png&w=3840&q=75",
        },
        {
          "id": "r1-4",
          "type": "image",
          "imageSrc":
            "https://media3.thrillophilia.com/filestore/o53vpvq51a8p0tci6buwp8kavawt_DSC_0003.JPG?w=400&dpr=2",
        },
        {
          "id": "r1-5",
          "type": "image",
          "imageSrc":
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpXEfZ5ZzYHejEpOBgA9IEjmtsRsmTUTmHQ&s",
        },
      ],
    },
    "internationalDestinations": [
      {
        "_id": "nepal",
        "title": "Nepalam",
        "subtitle": "Thin air & layered peaks.",
        "imageSrc":
          "https://ignitetravelsolution.com/wp-content/uploads/2024/09/Tourist-Attractions-in-Kathmandu-Nepal-.jpg",
        "destination": "nepal",
        "priceFrom": "$2100",
        "sizeMobile": 6,
        "sizeDesktop": 3,
      },
      {
        "_id": "switzerland",
        "title": "Switzerland",
        "subtitle": "Rail lines through alpine clarity.",
        "imageSrc": "https://acko-cms.ackoassets.com/switzer_land_d4ff3a3099.png",
        "destination": "switzerland",
        "priceFrom": "$2100",
        "sizeMobile": 6,
        "sizeDesktop": 6,
      },
      {
        "_id": "japan",
        "title": "Japan",
        "subtitle": "Precision, calm, season flow.",
        "imageSrc":
          "https://d2lwt6tidfiof0.cloudfront.net/images/background/bg-japan.webp",
        "destination": "japan",
        "priceFrom": "$2100",
        "sizeMobile": 6,
        "sizeDesktop": 3,
      },
      {
        "_id": "iceland",
        "title": "Iceland",
        "subtitle": "Thermal earth & stark horizons.",
        "imageSrc":
          "https://imgcdn.flamingotravels.co.in/Images/Menu/Destination/iceland.jpg",
        "destination": "iceland",
        "priceFrom": "$2100",
        "sizeMobile": 6,
        "sizeDesktop": 4,
      },
      {
        "_id": "canada",
        "title": "Canada",
        "subtitle": "Lakes, pines, northern calm.",
        "imageSrc":
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
        "destination": "canada",
        "priceFrom": "$2100",
        "sizeMobile": 6,
        "sizeDesktop": 4,
      },
      {
        "_id": "new-zealand",
        "title": "New Zealand",
        "subtitle": "Coast → fjord → volcanic ridge.",
        "imageSrc":
          "https://inscapephototours.com/wp-content/uploads/2017/08/New_Zealand_Photo_Tour_Mt_Cook.jpg",
        "destination": "new-zealand",
        "priceFrom": "$2100",
        "sizeMobile": 6,
        "sizeDesktop": 4,
      },
    ],
    "trendingPackages": [
      {
        "_id": "693079cf5dd088aa2818ca82",
        "thumbnail":
          "https://portugal-magik.com/wp-content/uploads/2016/12/Porto_Tours_Transfers_Lisbon.jpg",
        "title": "Porto’s Coastal Charm S1",
        "description":
          "Experience the magic of the sea with our exclusive cruise packages.",
        "rating": 4,
        "days": 5,
        "nights": 4,
        "bestFor": "Couple",
        "price": "50,000",
        "originalPrice": "60,000",
        "discountedPrice": "50,000",
      },
      {
        "_id": "2",
        "thumbnail":
          "https://www.cvent.com/venues/_next/image?url=https%3A%2F%2Fimages.cvent.com%2Fcsn%2Ffeb93b68-cdd0-494f-b7a5-77acd4783562%2Fimages%2Ffefac8282ed445a4bd38f69d4d97ae21_large!_!f4b4656590318a959b758c6e9c5c11f2.jpg&w=3840&q=80",
        "title": "Bali Bliss Retreat",
        "description":
          "Relax and unwind in tropical paradise with our curated experiences.",
        "rating": 5,
        "days": 6,
        "nights": 5,
        "bestFor": "Friends",
        "price": "65,000",
        "originalPrice": "75,000",
        "discountedPrice": "65,000",
      },
      {
        "_id": "3",
        "thumbnail": "https://hillstrip.com/assets/img/manali-img/9.webp",
        "title": "Himalayan Escape",
        "description": "Adventure through scenic landscapes and serene valleys.",
        "rating": 4,
        "days": 7,
        "nights": 6,
        "bestFor": "Group",
        "price": "70,000",
        "originalPrice": "85,000",
        "discountedPrice": "70,000",
      },
      {
        "_id": "4",
        "thumbnail":
          "https://media3.thrillophilia.com/filestore/7j1siorb7zlzh87k02g9psd00995_shutterstock_1702047661.jpg?h=976&w=auto&dpr=1",
        "title": "Santorini Sunset Getaway",
        "description": "Experience the world’s most romantic sunsets in style.",
        "rating": 5,
        "days": 4,
        "nights": 3,
        "bestFor": "Couple",
        "price": "80,000",
        "originalPrice": "95,000",
        "discountedPrice": "80,000",
      },
      {
        "_id": "5",
        "thumbnail":
          "https://images.luxuryescapes.com/fl_progressive,q_auto:best,dpr_2.0/2h4palzrqdz5l8eh7qso",
        "title": "Maldives Luxury Escape",
        "description": "Stay in overwater villas surrounded by turquoise beauty.",
        "rating": 5,
        "days": 5,
        "nights": 4,
        "bestFor": "Couple",
        "price": "1,10,000",
        "originalPrice": "1,30,000",
        "discountedPrice": "1,10,000",
      },
      {
        "_id": "6",
        "thumbnail": "https://geniustravelservice.com/assets/tours/6.webp",
        "title": "Paris Romance Tour",
        "description": "Walk the streets of love and experience timeless beauty.",
        "rating": 5,
        "days": 5,
        "nights": 4,
        "bestFor": "Couple",
        "price": "95,000",
        "originalPrice": "1,10,000",
        "discountedPrice": "95,000",
      },
      {
        "_id": "7",
        "thumbnail":
          "https://dreamsyatri.com/wp-content/uploads/2025/08/Untitled-design-2025-08-13T180157.745.jpg",
        "title": "Thailand Adventure Package",
        "description":
          "Enjoy beaches, temples, and street food like never before.",
        "rating": 4,
        "days": 6,
        "nights": 5,
        "bestFor": "Friends",
        "price": "55,000",
        "originalPrice": "65,000",
        "discountedPrice": "55,000",
      },
      {
        "_id": "8",
        "thumbnail":
          "https://media3.thrillophilia.com/filestore/ytq1j06ndd63wnoua0vywhik8ia3_shutterstock_1196821240.jpg?h=976&w=auto&dpr=1",
        "title": "Dubai Luxury Escape",
        "description":
          "Desert safaris, skyscrapers, and luxury shopping await you.",
        "rating": 5,
        "days": 4,
        "nights": 3,
        "bestFor": "Friends",
        "price": "75,000",
        "originalPrice": "90,000",
        "discountedPrice": "75,000",
      },
      {
        "_id": "9",
        "thumbnail":
          "https://static.wixstatic.com/media/ed75e9_a632f4cd3b5444549d4a4f12be78f530~mv2_d_3119_2079_s_2.jpg/v1/fill/w_2500,h_1666,al_c/ed75e9_a632f4cd3b5444549d4a4f12be78f530~mv2_d_3119_2079_s_2.jpg",
        "title": "Kerala Backwater Cruise",
        "description":
          "Sail through serene backwaters with authentic local cuisine.",
        "rating": 4,
        "days": 5,
        "nights": 4,
        "bestFor": "Family",
        "price": "45,000",
        "originalPrice": "55,000",
        "discountedPrice": "45,000",
      },
      {
        "_id": "10",
        "thumbnail":
          "https://deih43ym53wif.cloudfront.net/large_zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg",
        "title": "Swiss Alps Explorer",
        "description": "Snowy peaks, scenic railways, and luxury alpine stays.",
        "rating": 5,
        "days": 7,
        "nights": 6,
        "bestFor": "Group",
        "price": "1,20,000",
        "originalPrice": "1,40,000",
        "discountedPrice": "1,20,000",
      },
    ],
    "domesticDestinations": [
      {
        "_id": "nepal",
        "title": "Nepali",
        "subtitle": "Thin air & layered peaks.",
        "imageSrc":
          "https://ignitetravelsolution.com/wp-content/uploads/2024/09/Tourist-Attractions-in-Kathmandu-Nepal-.jpg",
        "destination": "nepal",
        "priceFrom": "$2100",
        "sizeMobile": 6,
        "sizeDesktop": 3,
      },
      {
        "_id": "switzerland",
        "title": "Switzerland",
        "subtitle"  : "Rail lines through alpine clarity.",
        "imageSrc": "https://acko-cms.ackoassets.com/switzer_land_d4ff3a3099.png",
        "destination": "switzerland",
        "priceFrom": "$2100",
        "sizeMobile": 6,
        "sizeDesktop": 6,
      },
      {
        "_id": "japan",
        "title": "Japan",
        "subtitle": "Precision, calm, season flow.",
        "imageSrc":
          "https://d2lwt6tidfiof0.cloudfront.net/images/background/bg-japan.webp",
        "destination": "japan",
        "priceFrom": "$2100",
        "sizeMobile": 6,
        "sizeDesktop": 3,
      },
      {
        "_id": "iceland",
        "title": "Iceland",
        "subtitle": "Thermal earth & stark horizons.",
        "imageSrc":
          "https://imgcdn.flamingotravels.co.in/Images/Menu/Destination/iceland.jpg",
        "destination": "iceland",
        "priceFrom": "$2100",
        "sizeMobile": 6,
        "sizeDesktop": 4,
      },
      {
        "_id": "canada",
        "title": "Canada",
        "subtitle": "Lakes, pines, northern calm.",
        "imageSrc":
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop",
        "destination": "canada",
        "priceFrom": "$2100",
        "sizeMobile": 6,
        "sizeDesktop": 4,
      },
      {
        "_id": "new-zealand",
        "title": "New Zealand",
        "subtitle": "Coast → fjord → volcanic ridge.",
        "imageSrc":
          "https://inscapephototours.com/wp-content/uploads/2017/08/New_Zealand_Photo_Tour_Mt_Cook.jpg",
        "destination": "new-zealand",
        "priceFrom": "$2100",
        "sizeMobile": 6,
        "sizeDesktop": 4,
      },
    ],
    "ebookPromo": {
      "id": "launch-ebook",
      "title": "Ultimate Travel Playbook 2025",
      "subtitle": "Exclusive Early Access",
      "description":
        "Strategic destination insights, seasonal timing frameworks, experience blueprints, and budgeting matrices distilled for modern explorers.",
      "image": "/images/ebookbanner.png",
      "cta": "Coming Soon",
      "href": "#",
      "colors": {
        "title": "#FFFFFF",
        "subtitle": "#06A15c",
        "description": "#FFFFFF",
        "buttonBg": "#06A15C",
        "buttonText": "#FFFFFF",
        "overlayFrom": "rgba(0,0,0,0.4)",
        "overlayTo": "rgba(0,0,0,0.4)",
        "border": "#E5E7EB",
        "accentBg": "#F3F4F6",
      },
    },
    "customerStories": [
      {
        "id": "1",
        "customerName": "Steve Harrington S",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/5/5c/Steve_-_Season_4.jpg/revision/latest/scale-to-width-down/1000?cb=20220719024524",
        "storyThumbnail":
          "https://hikerwolf.com/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-02-at-7.18.33-PM.jpeg",
        "storyMedia":
          "https://static.vecteezy.com/system/resources/previews/034/138/597/mp4/snow-hill-nature-free-video.mp4",
        "storyType": "video",
        "caption": "Kathmandu sunrise!",
      },
      {
        "id": "2",
        "customerName": "Dustin Henderson",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/7/7b/Dustin_S3.png/revision/latest/scale-to-width-down/1000?cb=20230329233607",
        "storyThumbnail":
          "https://img.freepik.com/free-photo/young-hipster-beautiful-couple-love-sitting-road_285396-2240.jpg?semt=ais_hybrid&w=740&q=80",
        "storyMedia":
          "https://img.freepik.com/free-photo/young-hipster-beautiful-couple-love-sitting-road_285396-2240.jpg?semt=ais_hybrid&w=740&q=80",
        "storyType": "image",
        "caption": "Swiss Alps adventure.",
      },
      {
        "id": "3",
        "customerName": "Eleven",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/6/62/Eleven_S2_revised.png/revision/latest?cb=20171124231338",
        "storyThumbnail":
          "https://eastasiaforum.org/wp-content/uploads/2024/02/2023-03-29T173146Z_738817611_RC2G30APFY3Z_RTRMADP_3_JAPAN-DAILYLIFE-1024x673.jpg",
        "storyMedia":
          "https://eastasiaforum.org/wp-content/uploads/2024/02/2023-03-29T173146Z_738817611_RC2G30APFY3Z_RTRMADP_3_JAPAN-DAILYLIFE-1024x673.jpg",
        "storyType": "image",
        "caption": "Japan in motion.",
      },
      {
        "id": "CS000010",
        "customerName": "Mike Wheeler",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/f/f0/Mike_Wheeler_S3.png/revision/latest?cb=20190918231339",
        "storyThumbnail":
          "https://img.freepik.com/premium-vector/vector-young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-12445.jpg?semt=ais_hybrid&w=740&q=80",
        "storyMedia": "https://www.w3schools.com/html/mov_bbb.mp4",
        "storyType": "video",
        "caption": "Japan in motion.",
      },
      {
        "id": "4",
        "customerName": "Lucas Sinclair",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/b/b4/Lucas_S4.png/revision/latest/scale-to-width-down/1000?cb=20230602174909",
        "storyThumbnail":
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600",
        "storyMedia":
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
        "storyType": "image",
        "caption": "Icelandic dreams.",
      },
      {
        "id": "5",
        "customerName": "Max Mayfield",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/7/73/Max_Mayfield_-_S3.png/revision/latest?cb=20220731231457",
        "storyThumbnail":
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600",
        "storyMedia":
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
        "storyType": "image",
        "caption": "Patagonia trek.",
      },
      {
        "id": "6",
        "customerName": "Will Byers",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/b/bd/Will_Byers_S2.jpg/revision/latest?cb=20221219230515",
        "storyThumbnail":
          "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=600",
        "storyMedia":
          "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1200",
        "storyType": "image",
        "caption": "Desert festival in Rajasthan.",
      },
      {
        "id": "7",
        "customerName": "Nancy Wheeler",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/7/7f/NancyWheeler.png/revision/latest?cb=20160819170317",
        "storyThumbnail":
          "https://images.unsplash.com/photo-1465156799763-2c087c332922?q=80&w=600",
        "storyMedia":
          "https://images.unsplash.com/photo-1465156799763-2c087c332922?q=80&w=1200",
        "storyType": "image",
        "caption": "Sahara sunset ride.",
      },
      {
        "id": "8",
        "customerName": "Billy Hargrove",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/6/65/Billy_Hargrove.png/revision/latest?cb=20220715152521",
        "storyThumbnail":
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=600",
        "storyMedia":
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200",
        "storyType": "image",
        "caption": "Venetian gondola day.",
      },
      {
        "id": "9",
        "customerName": "Jonathan Byers",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/5/50/Jonathan_in_Season_Four.png/revision/latest/scale-to-width-down/1000?cb=20220630040241",
        "storyThumbnail":
          "https://media.istockphoto.com/id/508156356/photo/aircraft-wing.jpg?s=612x612&w=0&k=20&c=0SAChAa9WNfwtdCxtuVgro7MoZj5VfHtuXWccVEK0l4=",
        "storyMedia":
          "https://dev-bucket-outbound.s3.ap-south-1.amazonaws.com/test/samplevideo.webm",
        "storyType": "video",
        "caption": "Grand Canyon hike.",
      },
      {
        "id": "10",
        "customerName": "Robin Buckley",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/e/ea/Robin_Buckley_-_alt_S3_portrait.png/revision/latest?cb=20250926175652",
        "storyThumbnail":
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=600",
        "storyMedia":
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1200",
        "storyType": "image",
        "caption": "Marrakech market colors.",
      },
      {
        "id": "11",
        "customerName": "Eddie Munson",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/c/ca/Eddie_Munson.jpg/revision/latest?cb=20220608205857",
        "storyThumbnail":
          "https://images.pexels.com/photos/358235/pexels-photo-358235.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "storyMedia":
          "https://dev-bucket-outbound.s3.ap-south-1.amazonaws.com/test/sample2video.webm",
        "storyType": "video",
        "caption": "Rio carnival night.",
      },
      {
        "id": "12",
        "customerName": "Argyle",
        "customerImage":
          "https://static.wikia.nocookie.net/strangerthings8338/images/4/47/Argyle_S4.png/revision/latest/scale-to-width-down/1000?cb=20220909212533",
        "storyThumbnail":
          "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=600",
        "storyMedia":
          "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1200",
        "storyType": "image",
        "caption": "Parisian café morning.",
      },
    ],
    "faqs": [
      {
        "question": "What is included in your travel packages?",
        "answer":
          "Our packages typically include flights, accommodation, selective meals, guided tours, and local transfers. Please check each package for specific inclusions.",
      },
      {
        "question": "Can I customize my itinerary?",
        "answer":
          "Yes! We offer customizable itineraries. Contact our travel experts to tailor your trip according to your preferences.",
      },
      {
        "question": "Do you offer group discounts?",
        "answer":
          "Yes, we provide special discounts for group bookings. Please reach out to our team for more details.",
      },
      {
        "question": "Is travel insurance included?",
        "answer":
          "Travel insurance is not included by default but can be added to your package upon request.",
      },
      {
        "question": "How do I make a booking?",
        "answer":
          "You can book directly through our website or contact our customer support for assistance.",
      },
      {
        "question": "What is your cancellation policy?",
        "answer":
          "Our cancellation policy varies by package and provider. Please refer to the package details or contact us for more information.",
      },
    ],
    "testimonials": [
      {
        "id": "1",
        "name": "Vecna Khan",
        "avatar":
          "https://static.wikia.nocookie.net/strangerthings8338/images/8/8b/Vecna_S4.jpg/revision/latest/scale-to-width-down/1000?cb=20230819085138",
        "rating": 5,
        "date": "2 weeks ago",
        "title": "Best Travel Experience!",
        "text": "The team handled everything perfectly. Highly recommended for international trips. Will definitely book again!",
      },
      {
        "id": "2",
        "name": "Henry Creel",
        "avatar":
          "https://static.wikia.nocookie.net/strangerthings8338/images/6/6a/Henry_Creel_portrait_2.png/revision/latest/scale-to-width-down/1000?cb=20230903101543",
        "rating": 5,
        "date": "1 month ago",
        "title": "Loved the Service",
        "text": "Loved the itinerary and the support throughout our journey. The staff was very helpful and responsive.",
      },
      {
        "id": "3",
        "name": "Young Henry Creel",
        "avatar":
          "https://static.wikia.nocookie.net/strangerthings8338/images/6/6c/Young_Henry_Creel_2.png/revision/latest?cb=20221102234158",
        "rating": 4,
        "date": "3 days ago",
        "title": "Great Value",
        "text": "Great service and value for money. Some minor hiccups but overall a memorable trip.",
      },
      {
        "id": "4",
        "name": "Jim Hopper",
        "avatar":
          "https://static.wikia.nocookie.net/strangerthings8338/images/2/2b/JimHopper.png/revision/latest?cb=20160819172733",
        "rating": 5,
        "date": "5 days ago",
        "title": "Smooth and Stress-Free",
        "text": "The best travel company I have used. Everything was smooth and stress-free from start to finish.",
      },
      {
        "id": "5",
        "name": "Joyce Byers",
        "avatar":
          "https://static.wikia.nocookie.net/strangerthings8338/images/4/40/ST4_Joyce.png/revision/latest?cb=20211107091328",
        "rating": 5,
        "date": "2 months ago",
        "title": "Excellent Planning",
        "text": "Excellent planning and support. Our family loved the trip and the experiences arranged for us.",
      },
    ],
  };

  // Always set default data on mount
  useEffect(() => {
    setHomePage(defaultData);
  }, []);

  return { loading, error, reload: () => {} };
}
