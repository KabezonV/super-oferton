// Vendors
import React from "react";
// Constants
import { DropdownArrowIcon } from "./constants/dropdown.constants";
// Hooks
import DropdownComponentHook from "./hooks/dropdown.component.hook";
// Styles
import "./styles/dropdwon.component.css";
// Types
import { SingleSelectDropdownPropsType } from "./types/dropdown.component.type";

const SingleSelectDropdown = ({
  label,
  options,
  placeholder,
  onSelect,
}: SingleSelectDropdownPropsType) => {
  const {
    dropdownRef,
    toggleDropdown,
    selectedText,
    isOpen,
    handleOptionClick,
    selectedValue,
  } = DropdownComponentHook({ placeholder, onSelect });

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <label htmlFor={`select-${label}`} className="dropdown-label">
        {label}
      </label>
      <button
        id={`select-${label}`}
        type="button"
        className="select-dropdown-button"
        onClick={toggleDropdown}
      >
        <span className="selected-value">{selectedText}</span>
        <DropdownArrowIcon />
      </button>

      <div className={`select-dropdown-content ${isOpen ? "show" : ""}`}>
        <div
          style={{ paddingTop: "0.25rem", paddingBottom: "0.25rem" }}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={`select-${label}`}
        >
          {options?.map((option) => (
            <a
              key={option.value}
              href="#"
              className="select-option"
              data-value={option.value}
              role="menuitem"
              onClick={(e) => {
                e.preventDefault();
                handleOptionClick(option.value, option.text);
              }}
            >
              {option.text}
            </a>
          ))}
        </div>
      </div>
      <input
        type="hidden"
        id={`hiddenSelectValue-${label}`}
        name="selectOption"
        value={selectedValue}
      />
    </div>
  );
};

export { SingleSelectDropdown };
