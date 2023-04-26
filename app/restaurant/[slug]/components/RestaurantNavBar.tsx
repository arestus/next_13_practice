import Link from "next/link";

export default function RestaurantNavBar() {
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link
        href="/restaurant/milestones-grill"
        className="font-bold text-gray-700 text-2xl">
        Overview
      </Link>
      <Link
        href="/restaurant/milestones-grill/menu"
        className="font-bold text-gray-700 text-2xl">
        Menu
      </Link>
    </nav>
  );
}
