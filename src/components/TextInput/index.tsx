import { InputHTMLAttributes, forwardRef } from "react";
import { TextInputContainer, InputWrapper } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optionText?: string;
}

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, optionText, ...rest }, ref) => {
    return (
      <TextInputContainer>
        <InputWrapper>
          <input type="text" ref={ref} placeholder={placeholder} {...rest} />
          {optionText && <span>{optionText}</span>}
        </InputWrapper>
      </TextInputContainer>
    );
  }
);
