import { forwardRef, InputHTMLAttributes } from "react";
import { Input } from "./Input";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    theme?: "light" | "dark";
    error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, Props>(
    ({ theme = "light", error, className, ...props }, ref) => {
        return (
            <span className="flex flex-col gap-4">
                <Input {...props} ref={ref} theme={theme} className={className} />
                {error && <p className="text-red-500">{error}</p>}
            </span>
        );
    },
);
