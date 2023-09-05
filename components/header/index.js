import Link from "next/link";

export default function Header() {
  return (
    <div className="w-100 d-flex justify-space-center">
      <nav className="d-flex justify-space-between align-items-center position-fixed w-75 t-0" 
      style={
        {
          height:"7rem", 
          }
        }>
        <Link className="gradient-text font-weight-6 font-size-5" href="/" style={{
          fontSize:"2.5rem"
        }}>Gerardo</Link>
        <span>
          <Link href="about" className="mr-3 text-gray-2">About</Link>
          <Link href="portfolio" className="text-gray-2">Portfolio</Link>
        </span>
      </nav>
    </div>
  );
}
