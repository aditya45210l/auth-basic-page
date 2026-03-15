import { useState } from "react"
import Input from "./Input"


const Auth = () => {

    const [type, setType] = useState<"sign-up" | "login">("login");

    const handleSwitch = () => setType(type === "login" ? "sign-up" : "login");

    return (
        <div className='flex flex-col p-12 rounded-2xl shadow-2xl gap-4'>
            <header className="text-center">
                <h1 className='text-3xl '>{type === "login" ? "Welcome back" : "Create  account"} </h1>
                <p className="text-gray-500">{type === "login" ? "Sign in to your account" : "Join us today"}</p>
            </header>

            {

                type != "login" ? <Input placeholder="John Doe" subHeading="Full name" /> : ""
            }
            <Input placeholder="you@example.com" subHeading="email" type="email" />
            <Input placeholder="********" subHeading="password" type="password" />
            <button className="rounded-xl border border-gray-300  px-4 py-2.5  outline-none active:ring-2 active:ring-black transition-all bg-black text-white">{type === "login" ? "Sign in" : "Sign up"}</button>
            <p>{type === "login" ? "Don't have an account? " : `Don't have an account? `}
                {type === "login" ? <button className="font-bold text-sm underline cursor-pointer active:text-gray-500 transition-all" onClick={() => handleSwitch()}>Sign up</button> : <button className="font-bold text-sm underline cursor-pointer active:text-gray-500 transition-all" onClick={() => handleSwitch()}>Sign in</button>}
            </p>

        </div>
    )
}

export default Auth