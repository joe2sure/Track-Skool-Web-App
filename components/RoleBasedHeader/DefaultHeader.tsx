'use client';

import Link from 'next/link';

export default function DefaultHeader() {
  return (
    <header className="bg-background shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-hover">SkoolBridge</h1>
      <nav className="space-x-4">
        <Link href="/login" className="text-light hover:text-hover">
          Login
        </Link>
        <Link href="/signup" className="text-light hover:text-hover">
          Sign Up
        </Link>
      </nav>
    </header>
  );
}
