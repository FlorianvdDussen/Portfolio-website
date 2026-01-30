import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex-row bg-neutral-900 py-20">
      <ul className="flex justify-center gap-10">
        <div className="flex gap-10  my-2">
          <li className="text-white cursor-pointer hover:bold-16">Home</li>
          <li className="text-white cursor-pointer  hover:bold-16">About</li>
        </div>
      </ul>
      <ul className="flex gap-10 justify-center py-5">
        <Link href="" passHref>
          <Image
            className="hover:scale-105 cursor-pointer"
            src="/instagram.svg"
            alt="instagram"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/florian-van-der-dussen/" passHref>
          <Image
            className="hover:scale-105 cursor-pointer"
            src="/linkedin.svg"
            alt="linkedin"
            width={32}
            height={32}
          />
        </Link>
      </ul>
      <ul>
        <Link href="mailto:florianvanderdussen2@gmail.com" className="text-gray-20 text-center hover:underline">
        <p>Send me an email!</p>
        </Link>
      </ul>
    </section>
  );
};

export default Footer;
