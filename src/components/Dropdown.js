import { useState, useEffect, useRef } from "react"
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";


function Dropdown({ options, value, onChange }) {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {

            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler)
        }

    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }

    const renderedOptions = options.map((option) => {
        return <div className="p-1 rounded cursor-pointer hover:bg-sky-100" onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    })

    return (
        <div ref={divEl} className="relative w-48">
            <Panel
                className="flex items-center justify-between cursor-pointer"
                onClick={handleClick}>
                {value?.label || "Select..."}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">     {renderedOptions}
                </Panel>
            )}
        </div>
    )
}

export default Dropdown