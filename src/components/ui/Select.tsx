import { SelectProps } from "./types/select.types";

const Select: React.FC<SelectProps> = ({
  onChange,
  options,
  value,
  ...props
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded border px-4 py-2 text-sm dark:bg-base-25 dark:text-white"
      {...props}
    >
      {options.map((option, i) => {
        return (
          <option key={`option-key-${i}`} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
