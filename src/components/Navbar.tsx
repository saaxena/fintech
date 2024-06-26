"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import creditcardImage from '../../public/images/credit-card.png';
import mortageloanImage from '../../public/images/mortage-loan.png';
import businessloanImage from '../../public/images/business-loan.png';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

const Navbar: React.FC<{ className?: string }> = ({ className }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ${className}`}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Personal Loan">Personal Loan</HoveredLink>
            <HoveredLink href="/Business Loan">Business Loan</HoveredLink>
            <HoveredLink href="/Mortage Loan">Mortage Loan</HoveredLink>
            <HoveredLink href="/Credit Card">Credit Card</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <DynamicImageItem
              title="Personal Loan"
              href="https://algochurn.com"
              imagePath="/images/personal-loan.png"
              description="Prepare for tech interviews like never before."
            />
            <DynamicImageItem
              title="Business Loan"
              href="https://tailwindmasterkit.com"
              imagePath="/images/business-loan.png"
              description="Production ready Tailwind css components for your next project"
            />
            <DynamicImageItem
              title="Mortage Loan"
              href="https://gomoonbeam.com"
              imagePath="/images/mortage-loan.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <DynamicImageItem
              title="Credit Card"
              href="https://userogue.com"
              imagePath="/images/credit-card.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

const DynamicImageItem: React.FC<{
  title: string;
  href: string;
  imagePath: string;
  description: string;
}> = ({ title, href, imagePath, description }) => {
  const [src, setSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const importImage = async () => {
      const { default: imgSrc } = await import(`../../public${imagePath}`);
      setSrc(imgSrc);
    };

    importImage();
  }, [imagePath]);

  if (!src) {
    return null; // or return a loading state if necessary
  }

  return (
    <ProductItem
      title={title}
      href={href}
      src={src}
      description={description}
    />
  );
};

export default Navbar;
