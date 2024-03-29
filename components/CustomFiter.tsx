"use client";
import { useState, Fragment } from "react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { customProps } from "@/types";
import { updateSearchParams } from "@/utils";

function CustomFiter({ title, options, setFilter }: customProps) {
  const [selected, setSelected] = useState(options[0]); // State for storing the selected option

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(e.value);
        }}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="chevron up and down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="custom-filter__options">
              {options.map((options) => (
                <Listbox.Option
                  key={options.title}
                  value={options}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4  ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {options.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFiter;
