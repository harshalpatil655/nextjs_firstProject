import Link from "next/link";

const events = ({ data }) => {
  return (
    <div>
      <h1>This is Event Page</h1>
      {data?.map((el) => (
        <div key={el.id}>
          <Link href={`/events/${el.id}`}>
            <h2>{el.title}</h2>
            <img width={500} height={`100%`} src={el.image} alt={el.title} />
            <p>{el.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default events;

export async function getStaticProps() {
  const { events_categories } = await import("../../data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
