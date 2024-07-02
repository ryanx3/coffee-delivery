import { InputHTMLAttributes } from "react";
import { TextInputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput({ placeholder, ...rest }: InputProps) {
  return (
    <TextInputContainer {...rest}>
      <input type="text" placeholder={placeholder} />
    </TextInputContainer>
  );
}
