import { InputHTMLAttributes, forwardRef } from "react";
import {
  Container,
  InputField,
  HelperText,
  InputWrapper,
  OptionalText,
} from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optionalText?: boolean;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", helperText = "", optionalText = false, ...props }, ref) => {
    const hasError = helperText.length > 0;

    return (
      <Container>
        <InputWrapper>
          <InputField type={type} {...props} ref={ref} hasError={hasError} />
          {optionalText && <OptionalText>Opcional</OptionalText>}
          {hasError && <HelperText>{helperText}</HelperText>}
        </InputWrapper>
      </Container>
    );
  }
);
