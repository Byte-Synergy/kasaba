"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { LinkProps } from "next/link";
import NextLink from "next/link";
import { WithOptional } from "@/types";
import { cn } from "@heroui/theme";

export interface LinkProperties
  extends React.HTMLAttributes<HTMLAnchorElement>,
    WithOptional<LinkProps, "href"> {
  lang?: string;
  exact?: boolean;
  activeClassName?: string;
  inActiveClassName?: string;
}

const Link = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  LinkProperties
>(
  (
    {
      className,
      lang,
      activeClassName,
      inActiveClassName,
      exact,
      replace,
      children,
      href,
      ...props
    },
    ref,
  ) => {
    const pathname = usePathname();
    const isActive = href
      ? lang
        ? exact
          ? pathname === `/${lang}`
          : pathname.startsWith(`/${lang}${href}`)
        : exact
          ? pathname === href
          : pathname.startsWith(href.toString())
      : false;

    // Render a NextLink if href is defined
    if (href) {
      return (
        <NextLink
          scroll={false}
          className={cn(
            className,
            isActive ? activeClassName : inActiveClassName,
          )}
          ref={ref as React.Ref<HTMLAnchorElement>} // Ensuring correct ref type
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} // Apply only anchor props
          replace={replace}
          href={`${lang ? `/${lang}` : ""}${href}`}
        >
          {children}
        </NextLink>
      );
    }

    // Render a button if href is not defined
    return (
      <button
        className={cn(
          className,
          isActive ? activeClassName : inActiveClassName,
        )}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} // Apply only button props
        ref={ref as React.Ref<HTMLButtonElement>} // Ensuring correct ref type
      >
        {children}
      </button>
    );
  },
);

Link.displayName = "Link";

export default Link;
