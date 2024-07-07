import { InputHTMLAttributes, forwardRef } from "react";
import { TextInputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, ...rest }, ref) => {
    return (
      <TextInputContainer>
        <input type="text" ref={ref} placeholder={placeholder} {...rest} />
      </TextInputContainer>
    );
  }
);
