export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 px-6 py-6 text-center text-sm text-neutral-500">
      © {new Date().getFullYear()} Arman. All rights reserved.
    </footer>
  );
}