import Link from 'next/link';
import type { ReactNode } from 'react';
import React from 'react';

interface Props {
  href: string;
  children: ReactNode;
  isExternal?: boolean;
  className?: string;
}

export function LinkComponent(props: Props) {
  const className = props.className ?? '';
  const isExternal =
    props.href.match(/^([a-z0-9]*:|.{0})\/\/.*$/) || props.isExternal;

  if (isExternal) {
    return (
      <Link
        className={className}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </Link>
    );
  }

  return (
    <Link className={className} href={props.href}>
      {props.children}
    </Link>
  );
}
