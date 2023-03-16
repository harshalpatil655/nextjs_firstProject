import Image from "next/image";
import Link from "next/link";

const EventsCatPage = ({ data, pageName }) => {
  return (
    <div>
      <div>
        <h1>Events in {`${pageName}`}</h1>
      </div>
      {data?.map((el) => (
        <Link key={el.id} href={`/events/${el.city}/${el.id}`}>
          <Image width={400} height={400} src={el.image} alt={el.title} />
          <h2>{el.title}</h2>
          <p>{el.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");

  const allPaths = events_categories.map((el) => {
    return {
      params: {
        cat: el.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.cat;
  const { allEvents } = await import("../../../data/data.json");
  const data = allEvents.filter((el) => el.city == id);
  return {
    props: { data, pageName: id },
  };
}
