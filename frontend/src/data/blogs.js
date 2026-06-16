export const blogs = [
  {
    id: 1,
    slug: "house-renovation-time-london",
    date: "June 9, 2026",
    title: "How Long Does a House Renovation Take in London?",
    excerpt:
      "One family in Notting Hill thought the job would take eight weeks. Maybe twelve at most. Here's what actually happened — and what you should plan for.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    category: "Renovation",
  },
  {
    id: 2,
    slug: "open-plan-kitchen-renovation-london",
    date: "June 8, 2026",
    title: "Open Plan Kitchen Renovation: Ideas, Costs & Builders in London",
    excerpt:
      "Kitchen walls keep disappearing across London homes lately. Not only because magazines say so — families genuinely want more connected living spaces.",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
    category: "Kitchen",
  },
  {
    id: 3,
    slug: "best-home-improvement-companies-london",
    date: "June 7, 2026",
    title: "Best Home Improvement Companies in London: How to Vet & Choose",
    excerpt:
      "Home renovation complaints in the UK shot up fast over the last few years. Here's how to find a builder you can actually trust.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    category: "Guide",
  },
  {
    id: 4,
    slug: "house-extension-cost-london-2026",
    date: "June 6, 2026",
    title: "House Extension Cost London 2026: Complete Price Guide",
    excerpt:
      "Planning a house extension in London? This comprehensive guide breaks down every cost factor you need to know for 2026.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Extensions",
  },
  {
    id: 5,
    slug: "full-dormer-vs-rear-dormer",
    date: "May 21, 2026",
    title: "Full Dormer vs Rear Dormer: Which Adds More Space and Value?",
    excerpt:
      "Choosing between dormer types can significantly impact your loft conversion's cost, space gained, and property value.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe621c853?w=800&q=80",
    category: "Loft",
  },
  {
    id: 6,
    slug: "garage-conversion-ideas",
    date: "May 20, 2026",
    title: "Garage Conversion Ideas That Go Beyond the Basic Extra Room",
    excerpt:
      "Your garage holds more potential than you think. From home gyms to creative studios, explore inspiring conversion ideas.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    category: "Conversions",
  },
  {
    id: 7,
    slug: "dormer-loft-conversion-costs-london",
    date: "May 19, 2026",
    title: "Dormer Loft Conversion Costs in London: A Realistic Breakdown",
    excerpt:
      "Loft conversions are one of the most cost-effective ways to add space in London. Here's what you'll actually pay.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    category: "Loft",
  },
  {
    id: 8,
    slug: "design-and-build-services",
    date: "May 18, 2026",
    title: "How Design and Build Services Simplify Large Home Projects",
    excerpt:
      "Managing architects, builders, and suppliers separately is exhausting. Design and build puts one team in charge of everything.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    category: "Design",
  },
  {
    id: 9,
    slug: "modern-bathroom-design-trends",
    date: "May 18, 2026",
    title: "Modern Bathroom Design Trends Worth Considering for Your Next Renovation",
    excerpt:
      "From spa-inspired wet rooms to bold tile choices, these bathroom trends are shaping London home renovations in 2026.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    category: "Bathroom",
  },
  {
    id: 10,
    slug: "modern-kitchen-design-ideas",
    date: "May 17, 2026",
    title: "Modern Kitchen Design Ideas That Actually Work in Everyday Life",
    excerpt:
      "Beautiful kitchens that fail in daily use are all too common. These design ideas balance style with real-world functionality.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    category: "Kitchen",
  },
];

export const getBlogBySlug = (slug) => blogs.find((b) => b.slug === slug);
