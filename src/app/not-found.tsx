import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 mono">
      <h1 className="text-6xl font-bold mb-4">404</h1>

      <h2 className="text-2xl font-semibold mb-4">
        Page Not Found
      </h2>

      <p className="text-muted-foreground mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist...yet
      </p>

      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}