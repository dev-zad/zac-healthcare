import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";
import { Typography } from "@/components/Typography";

const HeroSection = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container my-auto flex-1">
        <div className="sub-container max-w-[496px]">
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <Link href="/get-linked?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <div className="flex flex-1 items-center justify-center bg-[#FFC83D]">
        <Typography variant="h1">STRONGER</Typography>
      </div>
    </div>
  );
};

export default HeroSection;
