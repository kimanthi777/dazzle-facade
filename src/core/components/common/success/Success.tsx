import * as successSVG from '../../../../assets/svg/success-checkmark.svg'

type SuccessProps = {
    children?: React.ReactNode;
    text: string;
    id: string;
}

export const Success = ({ children, text, id }: SuccessProps) => {
    return (
        <div className='flex justify-center items-center text-green-500'>
            <span>{children}</span>
        </div>
    )
}
