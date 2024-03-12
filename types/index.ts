import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface filterProps {
  manufacturer: string;
  year: number;
  model: string;
  fuel: string;
  limit: number;
}

export interface homeProps {
  searchParams: filterProps;
}

export interface optionProps {
  title: string;
  value: string;
}

export interface customProps {
  title: string;
  options: optionProps[];
  setFilter: (manufacturer: string) => void;
}

export interface showMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (manufacturer: number) => void;
}
