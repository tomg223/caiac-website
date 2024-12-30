"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  const isSectionActive = (paths) => {
    return paths.some(path => pathname === path || pathname.startsWith(path + '/'));
  };

  return (
    <header className="flex items-center justify-between bg-white px-8 py-3 shadow-sm">
      {/* LOGO*/}
      <div className="flex items-center">
        <Link href="/" className="flex">
          <img 
            src="/logo.svg" 
            alt="Columbia AI Safety"
            className="h-12 w-auto"
          />
        </Link>
      </div>

      {/* MOBILE NAVIGATION*/}
      <MobileNavbar />

      {/*DESKTOP NAVIGATION */}
      <nav className="hidden md:block"> 
        <ul className="navbar hidden md:flex"> 
          {/* ABOUT */}
          <li className={`${isSectionActive(['/', '/about']) ? 'active' : ''}`} >
            
            <span>About</span>
            
            <ul>
              <li>
                <Link href="/" className={isActive("/") ? "underline" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about/team" 
                  className={isActive("/about/team") ? "underline" : ""}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link 
                  href="/about/mission"
                  className={isActive("/about/mission") ? "underline" : ""}
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link 
                  href="/about/donate"
                  className={isActive("/about/donate") ? "underline" : ""}
                >
                  Donate
                </Link>
              </li>
            </ul>
          </li>

          {/* RESEARCH */}
          <li>
            <Link
              href="/research"
              className={isActive("/research") ? "underline" : ""}
            >
              Research
            </Link>
          </li>

          {/* GET INVOLVED */}
          <li className={`${isSectionActive([ '/get_involved']) ? 'active' : ''}`}>
            <span>Get Involved</span>
            <ul>
              <li>
                <Link
                  href="/get_involved/technical-fellowship"
                  className={isActive("/get_involved/technical-fellowship") ? "underline" : ""}
                >
                  Technical Fellowship
                </Link>
              </li>
              <li>
                <Link
                  href="/get_involved/policy-fellowship"
                  className={isActive("/get_involved/policy-fellowship") ? "underline" : ""}
                >
                  Policy Fellowship
                </Link>
              </li>
              <li>
                <Link
                  href="/get_involved/workshops"
                  className={isActive("/get_involved/workshops") ? "underline" : ""}
                >
                  Workshops
                </Link>
              </li>
            </ul>
          </li>

          {/* RESOURCES */}
          <li className={`${isSectionActive([ '/resources']) ? 'active' : ''}`}>
            <span>Resources</span>
            <ul>
              <li>
                <Link
                  href="/resources/technical-papers"
                  className={isActive("/resources/technical-papers") ? "underline" : ""}
                >
                  Technical Papers
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/policy-papers"
                  className={isActive("/resources/policy-papers") ? "underline" : ""}
                >
                  Policy Papers
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/non-technical-intro"
                  className={isActive("/resources/non-technical-intro") ? "underline" : ""}
                >
                  Non-Technical Intro
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/many-other-resources"
                  className={isActive("/resources/many-other-resources") ? "underline" : ""}
                >
                  Many Other Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/blog"
                  className={isActive("/resources/blog") ? "underline" : ""}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}