type OnSelectType = {
  value: string;
  text: string;
};

type DropdownOptions = {
  value: string;
  text: string;
};

type SingleSelectDropdownPropsType = {
  label: string;
  options: DropdownOptions[];
  placeholder: string;
  onSelect: ({ value, text }: OnSelectType) => void;
};

export { SingleSelectDropdownPropsType };
