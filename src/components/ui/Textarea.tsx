import { TextareaHTMLAttributes, forwardRef } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return (
      <textarea
        className="rounded-md border px-3 py-2 shadow focus:outline-none focus:ring focus:ring-primary/40 dark:bg-base-25"
        ref={ref}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
