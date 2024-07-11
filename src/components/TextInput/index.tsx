import { InputHTMLAttributes, forwardRef } from "react";
import { TextInputContainer, InputWrapper } from "./styles";
import { LiaSearchLocationSolid } from "react-icons/lia";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  OptionalText?: string;
  ButtonSearch?: boolean;
  onButtonClick?: () => void;
}

export const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, OptionalText, ButtonSearch, onButtonClick, ...rest },
    ref
  ) => {
    return (
      <TextInputContainer>
        <InputWrapper>
          <input type="text" ref={ref} placeholder={placeholder} {...rest} />
          {OptionalText && <span>{OptionalText}</span>}
          {ButtonSearch && (
            <button onClick={onButtonClick} type="button">
              <LiaSearchLocationSolid title="Clique para pesquisar" size={26} />
            </button>
          )}
        </InputWrapper>
      </TextInputContainer>
    );
  }
);
