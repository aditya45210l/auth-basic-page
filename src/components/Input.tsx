
const Input = ({ placeholder, subHeading, type }: { placeholder: string, subHeading: string, type?: string }) => {

    return (
        <div className='flex flex-col gap-1 w-sm'>
            <p className='first-letter:uppercase text-gray-600'>{subHeading ? subHeading : "example"}</p>
            <input className="rounded-xl border border-gray-300  px-4 py-2.5 outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all" type={type ? type : "text"} placeholder={placeholder} />

        </div>
    )
}

export default Input