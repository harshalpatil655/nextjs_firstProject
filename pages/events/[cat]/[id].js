import Image from "next/image";

const EventPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>{data.city}</h1>
      <Image width={600} height={500} src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../data/data.json");
  const allPaths = allEvents.map((el) => {
    return {
      params: {
        cat: el.city,
        id: el.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { allEvents } = await import("../../../data/data.json");
  const eventData = allEvents.find((el) => id == el.id);
  return {
    props: {
      data: eventData,
    },
  };
}
