import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 border-t-2 p-10 ml-20 mt-50">
      <div className="col-start-1 col-span-2 flex flex-col items-start justify-start gap-3 p-5">
        <h4 className="text-3xl font-anton">LAGUNITAS</h4>
        <p>© 2026 All rights reserved.</p>
      </div>
      <div className="col-start-3 flex flex-col items-start justify-start gap-5 p-5">
        <p>Platform</p>
        <p>Pricing</p>
      </div>
      <div className="col-start-4 flex flex-col items-start justify-start gap-5 p-5">
        <p>Company</p>
        <p>About</p>
        <p>Careers</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
