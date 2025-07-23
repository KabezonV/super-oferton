// Types
import { RefObject } from "react";

type OnSelectType = {
  value: string;
  text: string;
};

type DropdownComponentHookType = {
  placeholder: string;
  onSelect: ({ value, text }: OnSelectType) => void;
};

type DropdownComponentReturnType = {
  dropdownRef: RefObject<HTMLElement | null>;
  toggleDropdown: () => void;
  selectedText: string;
  isOpen: boolean;
  handleOptionClick: (value: string, text: string) => void;
  selectedValue: string;
};

export { DropdownComponentHookType, DropdownComponentReturnType };
