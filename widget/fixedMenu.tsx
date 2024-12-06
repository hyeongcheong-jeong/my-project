"use client"
import { menu } from "@/entitiy"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FixedMenu() {
  const fixedMenu = menu;
  const [isAct, setAct] = useState(menu);
  const pathName= usePathname();
  const findIndex = isAct.findIndex(el => el.url === pathName);
  useEffect(() => {
    const update = [...isAct]
    update.reduce((acc, curr, index) => {
      if (index === findIndex) {
        curr.isCurrent = true;
      } else {
        curr.isCurrent = false;
      }
      return acc
    }, [])
    setAct(update)
  }, [pathName])

  return (
    <div className="flex justify-around w-full fixed bottom-0 left-0 z-50">
      {fixedMenu.map((menu, index) => (
        <Link key={menu.menu} href={menu.url} className="flex items-center flex-col min-w-10 text-sm">
          <Image src={`/icon/menu-icon-${menu.menu}-${menu.isCurrent ? 'on' : 'off'}.svg`} width={index === 2 ? '32' : '24'} height="24" alt="" className="mb-2" />
          {menu.menu}
        </Link>
      ))}
    </div>
  )
}