"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";

import React, { useEffect, useState } from "react";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
            child as React.ReactElement<{ visible?: boolean }>,
            { visible },
          )
          : child,
      )}
    </div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <div
      style={{
        WebkitBackdropFilter: visible ? "blur(18px)" : "blur(0px)",
        backdropFilter: visible ? "blur(30px)" : "blur(0px)",
        backgroundColor: visible ? "#000000" : "rgba(0,0,0,0)",
        borderColor: visible ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0)",
        boxShadow: visible ? "0 14px 40px rgba(0,0,0,0.35)" : "none",
        width: visible ? "70%" : "100%",
        transform: visible ? "translateY(20px)" : "translateY(0)",
        borderStyle: "solid",
        borderWidth: 1,
        transition: "backdrop-filter 220ms ease, background-color 220ms ease, border-color 220ms ease, box-shadow 220ms ease, width 220ms ease, transform 220ms ease",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
        className,
      )}
    >
      {children}
    </div>

  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "-ml-2 absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-7 text-sm font-semibold transition duration-200 lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onFocus={() => setHovered(idx)}
          onClick={onItemClick}
          className={cn(
            "relative px-2 py-2 transition-colors duration-300 rounded-full",
            // cor padrão = limegreen | hover = branco suave
            "text-[limegreen] hover:text-white dark:text-[limegreen] dark:hover:text-white"
          )}
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <div
              className={cn(
                "absolute inset-0 h-full w-full rounded-full transition-colors duration-300",
                // pill no hover em preto claro
                "bg-[#111111]"
              )}
            />
          )}

          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </div>

  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <div
      style={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        transform: visible ? "translateY(20px)" : "translateY(0)",
        transition: "backdrop-filter 220ms ease, box-shadow 220ms ease, width 220ms ease, padding 220ms ease, border-radius 220ms ease, transform 220ms ease",
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-6 py-2 lg:hidden",
        visible && "bg-[#000000] dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    isOpen ? (
      <div
        className={cn(
          "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
          className,
        )}
      >
        {children}
      </div>
    ) : null
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX className="text-[#22c55e] dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-[#22c55e] dark:text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >

      <div className="ml-4 flex items-center gap-2">
        <Image
          src="/gc.png"
          alt="Logo GC"
          width={36}
          height={36}
          className="h-9 w-9 rounded-full object-cover"
          priority
        />

        <span
          className="
    ml-1.5 text-2xl font-normal tracking-normal antialiased
    bg-gradient-to-r from-[#22c55e] to-[#22c55e]
    bg-clip-text text-transparent
  "
        >
         Gervásio Cardoso
        </span>


      </div>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
    | React.ComponentPropsWithoutRef<"a">
    | React.ComponentPropsWithoutRef<"button">
  )) => {


  const baseStyles =
    "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    // Mantidas apenas as sombras (que definem o relevo/profundidade)
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "shadow-none",
    dark: "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
