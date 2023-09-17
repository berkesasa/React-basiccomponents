import ReactDOM from "react-dom"
import { useEffect } from "react"

function Modal({onClose, children, actionBar}) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden')

        return () => {
            document.body.classList.remove('overflow-hidden')

        }
    }, []);

    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
            <div className="fixed max-md:inset-x-10 max-md:inset-y-40 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 max-md:p-7 md:p-10 bg-white rounded-2xl shadow-2xl overflow-y-scroll md:max-h-[50vh] max-md:text-sm">
                <div className="flex flex-col justify-between h-full space-y-10 max-md:max-w-[100vw]">
                    {children}
                    <div className="flex justify-end">{actionBar}</div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    )
}

export default Modal