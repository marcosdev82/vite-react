import './Header.css'

interface HeaderProps {
    title?: string;
}

export function Header({title="Titulo do header"}: HeaderProps) {
    return (
        <header>
            <h1>{title}</h1>
            <hr />
        </header>
    )
}