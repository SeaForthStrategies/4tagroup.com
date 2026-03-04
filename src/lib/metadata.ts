import type { Metadata } from "next";

const BASE_URL = "https://4tagroup.com";

export const homeMetadata: Metadata = {
  title: "Air Traffic Solutions Company, Carlsbad, CA | The Fortier Group",
  description:
    "A Certified Women Owned Small Business (WOSB) providing professional services for FAA, DoD and International Clients. Air Traffic Control Training, Consulting, and More.",
  keywords: [
    "air traffic control training",
    "ATC consulting",
    "FAA training",
    "DoD ATC",
    "STARS training",
    "quality assurance aviation",
    "WOSB aviation",
  ],
  openGraph: {
    title: "Air Traffic Control Training, Consulting, and More | The Fortier Group",
    description:
      "A Certified Women Owned Small Business (WOSB) providing professional air traffic control services for FAA, DoD and International Clients.",
    url: BASE_URL,
    siteName: "The Fortier Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Traffic Control Training, Consulting, and More | The Fortier Group",
    description:
      "Professional air traffic control training, consulting, and quality assurance services.",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const aboutMetadata: Metadata = {
  title: "About The Fortier Group | Air Traffic Consulting Company, Carlsbad, CA",
  description:
    "Learn about The Fortier Group, an experienced team of professionals providing Air Traffic Management and Aviation Support solutions worldwide since 1994.",
  openGraph: {
    title: "About The Fortier Group | Air Traffic Consulting Company",
    description:
      "An experienced team of professionals providing Air Traffic Management and Aviation Support solutions worldwide since 1994.",
    url: `${BASE_URL}/about`,
    siteName: "The Fortier Group",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
};

export const servicesMetadata: Metadata = {
  title: "Air Traffic Solutions | The Fortier Group, Carlsbad, CA",
  description:
    "Providing a wide array of air traffic and safety solutions including ATC systems training, quality assurance evaluations, and consulting services.",
  openGraph: {
    title: "Air Traffic Solutions | The Fortier Group",
    description:
      "ATC systems training, quality assurance evaluations, and consulting services for FAA, DoD, and international clients.",
    url: `${BASE_URL}/services`,
    siteName: "The Fortier Group",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
};

export const employeesMetadata: Metadata = {
  title: "Employee Portal | The Fortier Group",
  description: "Password-protected employee portal for The Fortier Group staff.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${BASE_URL}/employees`,
  },
};

export const contactMetadata: Metadata = {
  title: "Contact The Fortier Group | Carlsbad, CA",
  description:
    "Contact The Fortier Group for air traffic control training, consulting, and quality assurance services. Located in Carlsbad, CA.",
  openGraph: {
    title: "Contact The Fortier Group | Carlsbad, CA",
    description:
      "Get in touch with The Fortier Group for professional ATC services and instruction.",
    url: `${BASE_URL}/contact`,
    siteName: "The Fortier Group",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
};
