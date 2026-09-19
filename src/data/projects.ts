
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  language: string[];
};

export const projectData: Project[] = [
  {
    id: 1,
    title: "MovieHub",
    description:
      "A movie discovery application that uses the TMDB API to fetch and display movies, including popular titles, search results, and detailed movie information.",
    image: "/images/Screenshot (137).png",
    language: ["React", "JavaScript", "TMDB API", "Tailwind CSS"],
  },

  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce application with authentication, product browsing, cart management, wishlist functionality, and API integration.",
    image: "/images/Screenshot (138).png",
    language: ["React", "TypeScript", "React Query", "Axios"],
  },
];

