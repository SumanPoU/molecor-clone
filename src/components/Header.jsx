"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    label: "Home",
    path: "/#",
  },
  {
    label: "Company",
    path: "/#",
    submenu: [
      { label: "About Us", path: "/#about" },
      { label: "History", path: "/#history" },
      { label: "Quality", path: "/#quality" },
      { label: "Sustainability", path: "/#sustainability" },
    ],
  },
  {
    label: "Products",
    path: "/#",
    submenu: [
      { label: "PVC-O Pipes", path: "/#products-pvc-o-pipes" },
      { label: "PVC-O Fittings", path: "/#products-pvc-o-fittings" },
      { label: "Molecor Technology", path: "/#products-technology" },
    ],
  },
  {
    label: "Applications",
    path: "/#",
    submenu: [
      { label: "Irrigation", path: "/#applications-irrigation" },
      {
        label: "Water Distribution",
        path: "/#applications-water-distribution",
      },
      { label: "Industry", path: "/#applications-industry" },
    ],
  },
  {
    label: "News",
    path: "/#news",
  },
  {
    label: "Contact",
    path: "/#contact",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSubmenu = (label) => {
    if (openSubmenu === label) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(label);
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-lg py-2"
          : "bg-gradient-to-r from-primary/70 to-primary/90 py-3 md:py-4"
      )}
    >
      <div className="container max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/logo_molecor.png"
              alt="Molecor Logo"
              className={cn(
                "h-8 md:h-10 lg:h-12 transition-all duration-300",
                isScrolled ? "" : "brightness-0 invert"
              )}
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/120x40?text=Molecor";
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <button
                    className={cn(
                      "flex items-center px-2 py-2 dm-serif-text",
                      "font-medium transition-colors duration-200",
                      isScrolled
                        ? "text-primary hover:text-primary-dark"
                        : "text-white hover:text-accent"
                    )}
                    onClick={() => toggleSubmenu(item.label)}
                  >
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className={cn(
                      "px-2 py-2 dm-serif-text",
                      "font-medium transition-colors duration-200",
                      isScrolled
                        ? "text-primary hover:text-primary-dark"
                        : "text-white hover:text-accent"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {item.submenu && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-2 border-accent z-50">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.path}
                        className="block px-4 py-3 text-primary hover:bg-primary hover:text-white transition-colors duration-200 roboto-text"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Button
              variant={isScrolled ? "default" : "secondary"}
              className={cn(
                "roboto-text font-medium bg-accent text-primary hover:bg-white hover:text-primary focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-all"
              )}
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent",
              isScrolled ? "text-primary" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-primary/10">
          <Link href="/" className="flex items-center">
            <img
              src="/logo_molecor.png"
              alt="Molecor Logo"
              className="h-8"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/120x30?text=Molecor";
              }}
            />
          </Link>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={24} className="text-primary" />
          </button>
        </div>
        <nav className="px-6 py-4">
          {menuItems.map((item) => (
            <div key={item.label} className="py-2">
              {item.submenu ? (
                <>
                  <button
                    className="flex items-center justify-between w-full text-primary hover:text-primary-dark py-2 dm-serif-text"
                    onClick={() => toggleSubmenu(item.label)}
                  >
                    <span className="font-medium">{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        openSubmenu === item.label ? "rotate-180" : ""
                      )}
                    />
                  </button>
                  {openSubmenu === item.label && (
                    <div className="pl-4 mt-1 border-l-2 border-accent">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.path}
                          className="block py-2 text-primary-dark hover:text-accent roboto-text"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.path}
                  className="block text-primary hover:text-primary-dark py-2 font-medium dm-serif-text"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3 text-primary-dark roboto-text">
              <Phone size={16} />
              <span>+1 (800) 123-4567</span>
            </div>
            <Button
              className="w-full bg-accent text-primary hover:bg-primary hover:text-white roboto-text font-medium transition-all focus:ring-2 focus:ring-accent focus:ring-offset-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Button>
          </div>
        </nav>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
