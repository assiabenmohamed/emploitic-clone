import { useState } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { ArrowRightIcon, SearchIcon } from "lucide-react";

interface CountryOption {
  label: string;
  value: string;
  image: string;
}

const countryOptions: CountryOption[] = [
  { label: "India", value: "ind", image: "/image 1(1).png" },
  { label: "America", value: "us", image: "/image 1.png" },
];

export default function Search() {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(countryOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="*:not-first:mt-2">
      <div className="flex h-12">
        {/* Custom Dropdown */}
        <div className="relative inline-block text-left h-full">
          <button
            className="flex items-center gap-2 px-4 py-2 border  h-full focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image src={selectedCountry.image} width={20} height={20} alt={selectedCountry.label} />
            {selectedCountry.label}
          </button>

          {isOpen && (
            <ul className="absolute left-0 mt-2 w-40 border h-12">
              {countryOptions.map((country) => (
                <li
                  key={country.value}
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer border bg-gray-100 hover:bg-gray-200 h-full"
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                  }}
                >
                  <Image src={country.image} width={20} height={20} alt={country.label} />
                  {country.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search Input */}
        <div className="relative h-full border">
          <Input className="peer ps-9 pe-9 border-none h-full w-[30vw]" placeholder="Job title, keyword, company" type="search" />
          <div className="text-blue-500 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
            <SearchIcon size={16} />
          </div>
          <button
            className="text-muted-foreground/80 hover:text-foreground absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center transition-[color,box-shadow] outline-none"
            aria-label="Submit search"
            type="submit"
          >
            <ArrowRightIcon size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
