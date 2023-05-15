"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, getProviders } from "next-auth/react";
const Navbar = () => {
  const isUserLoggedIn = true;
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      console.log(response);
      setProviders(response);
    };
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>

      {/*  Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  onClick={signIn(provider.id)}
                  key={provider.name}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My profile
                </Link>
                <Link
                  href="/"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create prompt
                </Link>
                <button
                  className="black_btn mt-5 w-full"
                  onClick={() => setToggleDropDown(false)}
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
