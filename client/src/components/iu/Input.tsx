interface Props extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Input ({ ...props }: Props): JSX.Element {
  return (
    <input className='p-2 w-full rounded-lg border-none outline-none'
      {...props} />
  )
}
