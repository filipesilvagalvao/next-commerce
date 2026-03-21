import Link from 'next/link'
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

function NavBar() {
    return (
        <nav className="navbar">
            <Link href="/">Next Store</Link>
            <div className=''>
                <Show when="signed-out">
                    <SignInButton mode='modal'>
                        <button>Fazer login</button>
                    </SignInButton>
                    <SignUpButton>
                        <button>Cadastro</button>
                    </SignUpButton>
                </Show>

                <Show when="signed-in">
                    <UserButton />
                </Show>
            </div>
        </nav>
    )
}

export default NavBar