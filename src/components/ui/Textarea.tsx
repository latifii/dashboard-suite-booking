import React from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <textarea
      className="h-32 w-full rounded border p-3 shadow-sm focus:border-primary focus:outline-none focus:ring focus:ring-primary/40 dark:bg-base-25"
      {...props}
    />
  );
};

export default Textarea;
