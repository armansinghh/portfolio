export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-800 px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Arman</h1>

      <div className="flex gap-6 text-sm">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
      </div>
    </nav>
  );
}