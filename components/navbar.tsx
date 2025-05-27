"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { Link } from "./link";
import Logo from "./logo";
import External from "./external";

const links = [
  { href: "https://docs.arkadiko.finance/", label: "Docs", external: true },
  { href: "#faq", label: "FAQ" },
];

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex rounded-2xl overflow-hidden">
      {links.map(({ href, label, external }) => (
        <div key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-6 py-3 text-lg font-medium text-gray-950 bg-blend-multiply transition duration-700 ease-in-out bg-white/30 data-[hover]:bg-black/[5%]"
          >
            {label}
            {external ? (
              <External className="w-4 h-auto ml-2.5 mt-1 text-gray-950 opacity-80" />
            ) : null}
          </Link>
        </div>
      ))}
    </nav>
  );
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg transition duration-700 ease-in-out bg-white/10 data-[hover]:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  );
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden mt-6 bg-black/80 rounded-3xl p-6">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label, external }) => (
          <div key={href}>
            <Link
              href={href}
              className="flex items-center text-base font-medium text-white/80 hover:text-white"
            >
              {label}
              {external ? (
                <External className="w-4 h-auto ml-2.5 mt-1 text-white opacity-80" />
              ) : null}
            </Link>
          </div>
        ))}
      </div>
    </DisclosurePanel>
  );
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-16">
      <div className="relative flex justify-between">
        <div className="relative flex gap-6">
          <Link href="/" title="Home">
            <Logo className="h-12" />
          </Link>
          {banner && (
            <div className="relative hidden items-center py-3 lg:flex">
              {banner}
            </div>
          )}
        </div>
        <DesktopNav />
        <MobileNavButton />
      </div>
      <MobileNav />
    </Disclosure>
  );
}
