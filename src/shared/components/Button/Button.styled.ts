import { Variant, Variants } from '$/shared/styles/variants'
import styled, { css } from 'styled-components'

export type ButtonStylingProps = { variant?: Variant | 'link'; block?: boolean }

const ButtonBase = css`
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.seminormal} ${({ theme }) => theme.spacings.normal};
  border: unset;
  border-radius: ${({ theme }) => theme.spacings.small};
  font-size: ${({ theme }) => theme.spacings.normal};

  transition: filter 0.2s ease-out;
`

const DARK_TEXT_VIARANTS = [Variants.Warning, Variants.Light]

export const StyledButton = styled.button<ButtonStylingProps>`
  ${ButtonBase}

  ${({ theme, variant = Variants.Primary }) => {
    if (variant === 'link') {
      return css`
        color: ${theme.colors.primary};
        background: unset;

        :hover {
          text-decoration: underline;
        }
      `
    }
    return css`
      background: ${theme.colors[variant]};
      color: ${!!variant && DARK_TEXT_VIARANTS.includes(variant as Variants) ? theme.colors.dark : theme.colors.white};
    `
  }}

  ${({ block }) => {
    return (
      block &&
      css`
        display: block;
        width: 100%;
      `
    )
  }}

  :hover {
    filter: brightness(80%);
  }
`
