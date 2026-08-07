import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between border-t-2 p-10 md:ml-20 ml-0 mt-20 gap-8">
      <div className="flex flex-col items-start justify-start gap-3">
        <h4 className="text-2xl md:text-3xl font-anton">LAGUNITAS</h4>
        <p className="text-muted-foreground">© 2026 All rights reserved.</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-muted-foreground">Platform</span>
          <span>Pricing</span>
          <span>Documentation</span>
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-muted-foreground">Company</span>
          <span>About</span>
          <span>Careers</span>
          <span>Terms of Service</span>
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-muted-foreground">Socials</span>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;