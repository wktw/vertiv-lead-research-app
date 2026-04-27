import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <h1>Vertiv Lead Research App</h1>
      <p>Browser-first MVP for evidence-based sales research and lead qualification.</p>
      <Link href="/dashboard">Go to app</Link>
    </main>
  );
}
