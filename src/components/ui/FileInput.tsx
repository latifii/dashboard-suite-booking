import React from "react";

type FileInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const FileInput: React.FC<FileInputProps> = (props) => {
  return (
    <div className="relative inline-block">
      <input
        type="file"
        className="rounded-sm text-sm transition-colors file:mr-3 file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-2 file:font-medium file:text-primary-content hover:file:bg-primary-focus"
        {...props}
      />
    </div>
  );
};

export default FileInput;
