export const services = [
  {
    id: 1,
    slug: "new-home-builds",
    number: "01",
    title: "New Home Build",
    shortTitle: "New Home Builds",
    description:
      "We design and construct high-quality homes from the ground up, ensuring durability, safety, and modern living standards tailored to your vision.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    features: [
      "Custom architectural design",
      "Structural engineering & planning",
      "Premium materials & finishes",
      "Energy-efficient construction",
    ],
  },
  {
    id: 2,
    slug: "house-renovations",
    number: "02",
    title: "Home Renovation",
    shortTitle: "House Renovations",
    description:
      "Upgrade and modernize your existing home with comprehensive renovation services that enhance comfort, functionality, and property value.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    features: [
      "Full property refurbishment",
      "Structural modifications",
      "Modern interior upgrades",
      "Heritage property restoration",
    ],
  },
  {
    id: 3,
    slug: "house-extensions",
    number: "03",
    title: "Home Extensions",
    shortTitle: "House Extensions",
    description:
      "Expand your living space with seamless extensions, whether adding new rooms, floors, or open-plan areas that blend perfectly with your home.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    features: [
      "Rear & side extensions",
      "Double-storey additions",
      "Open-plan conversions",
      "Planning permission support",
    ],
  },
  {
    id: 4,
    slug: "kitchen-remodelling",
    number: "04",
    title: "Kitchen Remodelling",
    shortTitle: "Kitchen Remodelling",
    description:
      "Transform your kitchen into a stylish and efficient space with custom layouts, quality fittings, and smart storage solutions.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    features: [
      "Bespoke cabinet design",
      "Premium appliance integration",
      "Open-plan kitchen layouts",
      "Smart storage solutions",
    ],
  },
  {
    id: 5,
    slug: "bathroom-renovation",
    number: "05",
    title: "Bathroom Renovation",
    shortTitle: "Bathroom Renovation",
    description:
      "Create a modern, comfortable bathroom with premium fixtures, elegant finishes, and efficient plumbing solutions.",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    features: [
      "Luxury wet rooms",
      "Underfloor heating",
      "Designer fixtures & tiles",
      "Complete plumbing overhaul",
    ],
  },
  {
    id: 6,
    slug: "garage-conversions",
    number: "06",
    title: "Garage Renovation",
    shortTitle: "Garage Conversions",
    description:
      "Convert or upgrade your garage into a functional space such as storage, workshop, home office, or additional living area.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    features: [
      "Home office conversions",
      "Extra bedroom creation",
      "Workshop & storage solutions",
      "Insulation & damp proofing",
    ],
  },
  {
    id: 7,
    slug: "design-and-builds",
    number: "07",
    title: "Design and Builds",
    shortTitle: "Design and Builds",
    description:
      "End-to-end design and build services that simplify large home projects with a single point of contact from concept to completion.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    features: [
      "Architectural design",
      "Project management",
      "Budget planning",
      "Turnkey delivery",
    ],
  },
  {
    id: 8,
    slug: "windows-doors",
    number: "08",
    title: "Windows & Doors",
    shortTitle: "Windows & Doors",
    description:
      "Upgrade your home's exterior and energy efficiency with premium windows and doors installed to the highest standards.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    features: [
      "Double & triple glazing",
      "Bi-fold & sliding doors",
      "Custom frame finishes",
      "Enhanced security features",
    ],
  },
  {
    id: 9,
    slug: "loft-conversions",
    number: "09",
    title: "Loft Conversions",
    shortTitle: "Loft Conversions",
    description:
      "Maximize your property's potential with expertly designed loft conversions including dormer and mansard options.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe621c853?w=800&q=80",
    features: [
      "Dormer loft conversions",
      "Mansard conversions",
      "Velux & skylight installs",
      "Building regulations compliance",
    ],
  },
  {
    id: 10,
    slug: "basement-conversions",
    number: "10",
    title: "Basement Conversions",
    shortTitle: "Basement Conversions",
    description:
      "Transform unused basement space into valuable living areas with professional waterproofing and fit-out services.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    features: [
      "Waterproofing systems",
      "Natural light solutions",
      "Cinema & gym rooms",
      "Full fit-out services",
    ],
  },
  {
    id: 11,
    slug: "home-office-renovations",
    number: "11",
    title: "Home Office Renovations",
    shortTitle: "Home Office Renovations",
    description:
      "Create a productive and stylish home office tailored to your workflow with custom built-ins and acoustic solutions.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: [
      "Custom desk & shelving",
      "Acoustic treatment",
      "Built-in storage",
      "Ergonomic design",
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug);
