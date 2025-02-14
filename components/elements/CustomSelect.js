import { useState, useRef, useEffect } from "react";
import styles from "../../public/assets/css/CustomSelect.module.css";

const CustomSelect = ({ options, onChange, value, placeholder = "Select" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || null);
  const dropdownRef = useRef(null);

  // Update selected option when value prop changes
  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  // Handle clicking outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleDropdown();
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div 
      className={styles.customSelect} 
      ref={dropdownRef}
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls="language-select-options"
    >
      <div
        className={`${styles.selectBox} ${isOpen ? styles.open : ""}`}
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Select language"
      >
        {selectedOption ? selectedOption.label : placeholder}
      </div>
      {isOpen && (
        <div 
          className={styles.options}
          role="listbox"
          id="language-select-options"
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.option} ${
                selectedOption?.value === option.value ? styles.selected : ""
              }`}
              onClick={() => handleOptionClick(option)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleOptionClick(option);
                }
              }}
              role="option"
              aria-selected={selectedOption?.value === option.value}
              tabIndex={0}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;