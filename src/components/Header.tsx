import Link from "next/link";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link href={'/phone'}>Phone</Link>
                    <Link href={'/phonecase'}>PhoneCase</Link>
                    <Link href={'/accessories'}>Accsesories</Link>
                    <Link href={'/watches'}>Watches</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;