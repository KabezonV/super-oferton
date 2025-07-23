// Vendors
import React, { useState, useRef, useEffect, useCallback } from "react";
// Types
import {
  DropdownComponentHookType,
  DropdownComponentReturnType,
} from "./types/dropdown.component.hook.type";

const DropdownComponentHook = ({
  placeholder,
  onSelect,
}: DropdownComponentHookType): DropdownComponentReturnType => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedText, setSelectedText] = useState<string>(placeholder);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value, text) => {
    setSelectedValue(value);
    setSelectedText(text);
    setIsOpen(false);
    if (onSelect) {
      onSelect({ value, text });
    }
  };

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef?.current?.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  return {
    dropdownRef,
    toggleDropdown,
    selectedText,
    isOpen,
    handleOptionClick,
    selectedValue,
  };
};

export default DropdownComponentHook;
