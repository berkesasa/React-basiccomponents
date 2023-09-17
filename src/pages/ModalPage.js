import { useState } from "react"
import Modal from "../components/Modal"
import Button from "../components/Button"

function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>

        <p>
            Here is an important agreement for you to accept.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at expedita facilis optio voluptatum architecto commodi minima obcaecati, inventore reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti vel velit ipsam distinctio minus earum minima totam pariatur maiores saepe soluta, consectetur dolore dolorum illum unde ab impedit et quasi sunt facilis! Quod, eum maiores ex saepe minima, placeat tenetur corrupti ipsa harum ipsam quia unde nam hic pariatur illum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at expedita facilis optio voluptatum architecto commodi minima obcaecati, inventore reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti vel velit ipsam distinctio minus earum minima totam pariatur maiores saepe soluta, consectetur dolore dolorum illum unde ab impedit et quasi sunt facilis! Quod, eum maiores ex saepe minima, placeat tenetur corrupti ipsa harum ipsam quia unde nam hic pariatur illum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at expedita facilis optio voluptatum architecto commodi minima obcaecati, inventore reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti vel velit ipsam distinctio minus earum minima totam pariatur maiores saepe soluta, consectetur dolore dolorum illum unde ab impedit et quasi sunt facilis! Quod, eum maiores ex saepe minima, placeat tenetur corrupti ipsa harum ipsam quia unde nam hic pariatur illum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at expedita facilis optio voluptatum architecto commodi minima obcaecati, inventore reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti vel velit ipsam distinctio minus earum minima totam pariatur maiores saepe soluta, consectetur dolore dolorum illum unde ab impedit et quasi sunt facilis! Quod, eum maiores ex saepe minima, placeat tenetur corrupti ipsa harum ipsam quia unde nam hic pariatur illum!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at expedita facilis optio voluptatum architecto commodi minima obcaecati, inventore reprehenderit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti vel velit ipsam distinctio minus earum minima totam pariatur maiores saepe soluta, consectetur dolore dolorum illum unde ab impedit et quasi sunt facilis! Quod, eum maiores ex saepe minima, placeat tenetur corrupti ipsa harum ipsam quia unde nam hic pariatur illum!
        </p>

    </Modal>

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage