// cSpell:disable
"use client";

import NavigationLinkItem from "./navigation-link-item";
import { useNavItems } from "@/lib/navItems";
import { useState, useCallback } from "react";
import { StaticRoutePaths } from "@/lib/routes";

export default function MainNavigation() {
  const navItems = useNavItems();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isAnyHovered = hoveredIndex !== null;

  const handleHover = useCallback((index: number | null) => {
    setHoveredIndex(index);
  }, []);

  return (
    <nav className="flex items-end">
      {navItems.map((item, index) => {
        const { link, label } = item;
        return (
          <NavigationLinkItem
            className="hidden text-base xl:mx-3.5 xl:flex"
            key={index}
            href={link as StaticRoutePaths}
            isHovered={hoveredIndex === index}
            isAnyHovered={isAnyHovered}
            onHover={(hovered) => handleHover(hovered ? index : null)}
          >
            {label}
          </NavigationLinkItem>
        );
      })}
    </nav>
  );
}
