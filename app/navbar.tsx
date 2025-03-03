/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define types for the permissions and user props
interface Permissions {
  accounts: {
    can_view_dashboard: boolean;
  };
  counterparty: {
    view_counterparty: boolean;
  };
  redlines: {
    view_keywordgroup: boolean;
  };
}

interface User {
  isAuthenticated: boolean;
}

const Navbar = () => {
  const user: User = {
    isAuthenticated: true, // This would typically come from your app's state or context
  };

  const perms: Permissions = {
    accounts: {
      can_view_dashboard: true,
    },
    counterparty: {
      view_counterparty: true,
    },
    redlines: {
      view_keywordgroup: false,
    },
  };
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 h-24 px-6">
      <div className="flex-none">
        <Image
          src="/ACRE_Logo_CMYK.png"
          alt="Enbridge Logo"
          width={90}
          height={40}
          className="h-10 ml-4 my-2"
        />
      </div>
      <div className="flex gap-2">
        <Link href="/">
          <NavbarButton>Home</NavbarButton>
        </Link>
        {perms.accounts.can_view_dashboard && (
          <Link href="/dashboard" id="id_dashboard_link">
            <NavbarButton>Dashboard</NavbarButton>
          </Link>
        )}
        {perms.counterparty.view_counterparty && (
          <Link href="/counterparties" id="id_counterparties_link">
            <NavbarButton>Counterparties</NavbarButton>
          </Link>
        )}
        {perms.redlines.view_keywordgroup && (
          <Link href="/keyword_group_list" id="id_keywords_link">
            Keywords
          </Link>
        )}
        {user.isAuthenticated && (
          <>
            <Link href="/jobs" id="id_jobs_list_link">
              <NavbarButton>Jobs</NavbarButton>
            </Link>
            <Link href="/profile">
              <NavbarButton>Profile</NavbarButton>
            </Link>

            <Link href="/login">
              <NavbarButton> Log Out</NavbarButton>
            </Link>

            {/* <form id="logout-form" method="post" action="/logout">
              <button
                type="submit"
                id="id_logout"
                className="text-sm text-primary hover:bg-secondary border-gray-200 hover:border-gray-200 text-nowrap"
              >
                Log Out
              </button>
            </form> */}
          </>
        )}
      </div>
    </nav>
  );
};

const NavbarButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="text-sm text-primary hover:bg-gray-100 p-4 rounded-md cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Navbar;
