// lib/thresholdWorks.js

export const thresholdWorks = [
  {
    slug: "untitled-04",
    number: "04",
    title: "Untitled 04",
    inquiryTitle: "Threshold Untitled 04",
    year: "2026",
    medium: "Oil, acrylic, graphite, and gesso on canvas",
    dimensions: "60 × 60 in",
    image: "/art/threshold/threshold-untitled-04.jpg",
    imageAlt:
      "Untitled 04 from the Threshold series, a large-scale abstract painting by Gareth Pitt-Hart",
    details: [
      {
        src: "/art/threshold/threshold-untitled-04-detail-1.jpg",
        alt: "Surface detail from Untitled 04 by Gareth Pitt-Hart",
      },
      {
        src: "/art/threshold/threshold-untitled-04-detail-2.jpg",
        alt: "Close detail showing layered marks and surface texture in Untitled 04 by Gareth Pitt-Hart",
      },
    ],
  },
  {
    slug: "untitled-09",
    number: "09",
    title: "Untitled 09",
    inquiryTitle: "Threshold Untitled 09",
    year: "2026",
    medium: "Oil, acrylic, graphite, and gesso on canvas",
    dimensions: "60 × 60 in",
    image: "/art/threshold/threshold-untitled-09.png",
    imageAlt:
      "Untitled 09 from the Threshold series, a large-scale black and white abstract painting by Gareth Pitt-Hart",
    details: [
      {
        src: "/art/threshold/threshold-untitled-09-detail-1.png",
        alt: "Surface detail from Untitled 09 by Gareth Pitt-Hart",
      },
      {
        src: "/art/threshold/threshold-untitled-09-detail-2.png",
        alt: "Close detail showing layered marks and surface texture in Untitled 09 by Gareth Pitt-Hart",
      },
    ],
  },
];

export function getThresholdWorkBySlug(slug) {
  return thresholdWorks.find((work) => work.slug === slug);
}

export function getAdjacentThresholdWorks(slug) {
  const index = thresholdWorks.findIndex((work) => work.slug === slug);

  return {
    previous: index > 0 ? thresholdWorks[index - 1] : null,
    next:
      index >= 0 && index < thresholdWorks.length - 1
        ? thresholdWorks[index + 1]
        : null,
  };
}