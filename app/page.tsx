import { CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-widht" id="discover">
        <div className="home__text-container">
          <h2 className="text-4xl font-extrabold">
            Discover the world&#39;s top car brands
          </h2>
          <p>
            Explore our curated list of the most popular car brands in the
            world.
          </p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Year" />
            <CustomFilter title="Year" />
          </div>
        </div>
      </div>
    </main>
  );
}
