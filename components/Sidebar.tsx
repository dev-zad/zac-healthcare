/* eslint-disable tailwindcss/no-custom-classname */
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col bg-gray-800 text-white">
      <div className="border-b-1 p-4">
        <Link href="/">Dashboard</Link>
      </div>
      <nav className="flex flex-col px-4">
        <Link href="/appointments">Appointments</Link>
        <Link href="/settings">Settings</Link>
        {/* Add more links as needed */}
      </nav>
    </aside>
  );
}
