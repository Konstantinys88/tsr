

interface ErrorMessageProps {
    error: string
}

const Error = ({ error }: ErrorMessageProps) => {
    return (
        <div className='text-center text-red-600'>{error}</div>
    )
}

export default Error;