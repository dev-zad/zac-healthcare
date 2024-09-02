"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Events } from "@/components/Events";
import LifeButton from "@/components/lgButton";
import { Typography } from "@/components/Typography";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function Home({ data }: { readonly data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AuroraBackground>
        <div className="relative flex flex-col items-center justify-center gap-20 px-4 lg:flex-col xl:flex-row">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative z-20 flex flex-col items-center justify-center gap-20 px-4 lg:flex-col xl:flex-row"
          >
            <div className="flex flex-col px-4 md:py-2 lg:flex-row lg:py-[20px]">
              <div className="flex flex-col">
                <Typography variant="overline" className="text-start md:text-center lg:text-start">
                  His life metro
                </Typography>
                <Typography variant="h1" className="flex">
                  LOVE GOD.
                  <br className="block md:hidden lg:block" /> MAKE DISCIPLES.
                  <br className="md:hidden lg:block" /> IMPACT OUR WORLD.
                </Typography>
                <Typography variant="paragraph_md" className="text-black">
                  This is how we know what love is: Jesus Christ laid down his life for us. And we ought to{" "}
                  <br className="hidden lg:block" /> lay down our lives for our brothers and sisters.
                  <br />- 1 John 3:16 (NIV)
                </Typography>
                <div className="py-4">
                  <Link href="/get-linked">
                    <LifeButton
                      label="Get Linked"
                      open={isOpen}
                      className="border shadow-sm hover:shadow-md"
                      setOpen={setIsOpen}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <Image
                className="px-0 lg:px-4"
                src="/assets/images/hislife.png"
                alt="Description of the image"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
          </motion.div>
        </div>
      </AuroraBackground>
      <div>
        <Events />
      </div>
    </>
  );
}

export default Home;
