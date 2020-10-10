import React from "react";

export interface HeaderFooterLinks {
  links: Array<Link>;
}

interface Link {
  displayText: string;
  url: string;
  isActive?: boolean;
  isDivider?: boolean;
  subHeaders?: Link[];
}

export const DesktopHeader = (links: HeaderFooterLinks) => {
  return <div className="container--constrained">Desktop Header</div>;
};
export const MobileHeader = (links: HeaderFooterLinks) => {
  return <div className="container--constrained">Mobile Header</div>;
};
