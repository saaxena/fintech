"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import personalLoanImage from '../../public/images/personal-loan.png';
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
            <ProductItem
              title="Personal Loan"
              href="https://algochurn.com"
              src={personalLoanImage}
              width={300}
              height={200}
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Business Loan"
              href="https://tailwindmasterkit.com"
              src={businessloanImage}
              description="Production ready Tailwind css components for your next project"
              width={0}
              height={0}
            />
            <ProductItem
              title="Mortage Loan"
              href="https://gomoonbeam.com"
              src={mortageloanImage}
              description="Never write from scratch again. Go from idea to blog in minutes."
              width={0}
              height={0}
            />
            <ProductItem
              title="Credit Card"
              href="https://userogue.com"
              src={creditcardImage}
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              width={0}
              height={0}
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

export default Navbar;
