import { forwardRef, InputHTMLAttributes } from "react";
import Input from "./Input";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  theme?: "light" | "dark";
  error?: string;
};

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ theme = "light", error, className, ...props }, ref) => {
    return (
      <span className="flex flex-col gap-4">
        <Input {...props} ref={ref} theme={theme} className={className} />
        {error && <p className="text-red-500">{error}</p>}
      </span>
    );
  },
);

FormInput.displayName = "FormInput";
export default FormInput;
