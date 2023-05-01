import { ButtonStylingProps, StyledButton } from './Button.styled'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonStylingProps

const Button = ({ variant, block, ...rest }: ButtonProps) => {
  return (
    <StyledButton variant={variant ?? 'primary'} block={block} {...rest}>
      {rest.children}
    </StyledButton>
  )
}

export default Button
