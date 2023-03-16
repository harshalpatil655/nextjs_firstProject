import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav style={{ display: "flex", gap: "20px" }}>
        <img />
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/about-us">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
