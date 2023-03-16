import Image from "next/image";
import Link from "next/link";

export const HomePage = ({ data }) => {
  return (
    <main>
      {data?.map((el) => (
        <div key={el.id}>
          <Link href={`/events/${el.id}`} passHref>
            <h2>{el.title}</h2>
            <Image width={400} height={400} src={el.image} alt={el.title} />
            <p>{el.description}</p>
          </Link>
        </div>
      ))}
    </main>
  );
};
