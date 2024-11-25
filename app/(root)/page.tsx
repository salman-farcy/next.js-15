import StatupCard from "@/components/StatupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
    const posts = [
    {
      _creeatedAt: new Date(),
      view: 55,
      title: 'this is my unick ida',
      author: { _id: 1, name: 'farcy' },
      _id: 1,
      description: "This is a description.",
      image: "https://i.ibb.co.com/6X0FjML/Screenshot-2.png",
      category: "AI",
    },
    {
      _creeatedAt: new Date(),
      view: 39,
      title: 'this is my unick ida2',
      author: { _id: 1 , name: 'thaGreate' },
      _id: 2,
      description: "This is a description.",
      image: "https://i.ibb.co.com/6X0FjML/Screenshot-2.png",
      category: "Robots",
    },
    {
      _creeatedAt: new Date(),
      view: 25,
      title: 'this is my unick ida3',
      author: { _id: 1 , name: 'intheWold' },
      _id: 3,
      description: "This is a description.",
      image: "https://i.ibb.co.com/6X0FjML/Screenshot-2.png",
      category: "tachnoligy",
    },
  ];

  return (
    <div className="">
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your StartUp, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Serch result for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StatupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </div>
  );
}  
