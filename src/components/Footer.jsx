import React from "react";

export const Footer = () => {
  return (
    <div className="bg-background flex max-w-screen items-center mx-auto  justify-center">
      <footer className="bg-background text-text-light py-2 max-w-7xl w-full">
        <div className="container mx-auto text-center flex justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Jakob Nieß. All rights reserved.
          </p>
          <p className="text-xs mt-2">Built with passion and creativity.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
