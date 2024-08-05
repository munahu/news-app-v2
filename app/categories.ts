export type CategoryName =
  | "business"
  | "general"
  | "science"
  | "sports"
  | "tech"
  | "health";

interface Category {
  name: CategoryName;
  domains: string[];
}

export const categories: Category[] = [
  {
    name: "business",
    domains: ["bloomberg.com", "businessinsider.com", "fortune.com", "wsj.com"],
  },
  {
    name: "general",
    domains: ["aljazeera.com", "cnn.com", "cbc.ca", "theglobeandmail.com"],
  },
  {
    name: "science",
    domains: [
      "nationalgeographic.com",
      "nextbigfuture.com",
      "newscientist.com",
    ],
  },
  {
    name: "sports",
    domains: [
      "talksport.com",
      "sports.yahoo.com",
      "foxsports.com",
      "www.bleacherreport.com",
    ],
  },
  {
    name: "tech",
    domains: ["wired.com", "theverge.com", "techcrunch.com", "arstechnica.com"],
  },
  {
    name: "health",
    domains: [
      "medicalnewstoday.com",
      "webmd.com",
      "mayoclinic.org",
      "medicalnewstoday.com",
    ],
  },
];

export const categoryNames = categories.map((category) => category.name);
