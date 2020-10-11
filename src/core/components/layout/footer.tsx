import React from "react";
import { HeaderFooterLinks } from "./header";

import "./footer.scss";

export const Footer = (links: HeaderFooterLinks) => {
  return (
    <footer className="footer-root">
      <div className="container--constrained">
        <div className="footer-spacing">
          <h3>Equippr</h3>
        </div>
      </div>
    </footer>
  );
};
