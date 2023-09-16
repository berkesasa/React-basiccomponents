import { GoBell, GoAlertFill, GoDatabase } from "react-icons/go";
import Button from '../components/Button'

function ButtonPage() {

    const handleClick = () => {}

    return (
        <div>
            <div>
                <Button
                    className="mb-5"
                    primary
                    outline
                    rounded
                    onClick={handleClick} >
                    <GoBell />
                    Click me
                </Button>
            </div>
            <div>
                <Button success rounded onMouseOver={handleClick} >
                    <GoAlertFill />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button danger >
                    <GoDatabase />
                    Hide me!
                </Button>
            </div>
            <div>
                <Button warning outline >Anything</Button>
            </div>
            <div>
                <Button secondary rounded outline>Example</Button>
            </div>
        </div>
    )
}


export default ButtonPage;

