import Link from "./Link"

function Sidebar() {

    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' }
    ]

    const renderedLinks = links.map((link) => {
        return (
            <Link
            className="mb-3"
            key={link.label}
            to={link.path} 
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            >{link.label}</Link>
        )
    })

    return (
        <div className="flex flex-col sticky top-0 items-start">
            {renderedLinks}
        </div>
    )
}

export default Sidebar