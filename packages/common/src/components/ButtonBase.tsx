import { ComponentProps } from 'react'

type ButtonProps = Omit<ComponentProps<'button'>, 'children'> & {
    label: string
}

const ButtonBase = ({ label, ...props }: ButtonProps) => {
    return <button {...props}>{label}</button>
}

export default ButtonBase
