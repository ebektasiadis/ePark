import { ButtonStylingProps, StyledButton } from './Button.styled'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonStylingProps

const Button = ({ variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {rest.children}
    </StyledButton>
  )
}

export default Button
