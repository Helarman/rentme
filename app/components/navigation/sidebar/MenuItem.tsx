'use client';

import { useRouter } from "next/navigation";

interface MenuItemProps {
  link?: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  link,
  label,
}) => {

  const router = useRouter();


  return (
    <li>
      <button onClick={() => router.push(link as string)} className="text-md py-3  block text-gray-700 hover:gGray-500">
        <span>{label}</span>
      </button>
    </li>
  );
}

export default MenuItem;