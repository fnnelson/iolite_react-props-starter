import { render } from "react-dom";

function CreatureItem({ creatureProp }) {
    console.log(creatureProp.origin)

    let renderIcon = () => {

        // if (creatureProp.origin == "Oklahoma") {
        //     return '🐥';
        // } if (creatureProp.origin == "USA") {
        //     return '🇺🇸';
        // }

        // the thing observed
        switch (creatureProp.origin) {
            // 
            case "Oklahoma":
                return '🐥';
            case "Flordah":
                return '🐊';
            default:
                break;
        }

    }

    return (
        <li>
            {creatureProp.name} is from {creatureProp.origin}
            {/* If creature.origin = oklahoma, render a chicken */}
            {renderIcon()}

            {
                (creatureProp.name == "TacoCat") && <h3> "Rarwr"</h3>
            }
            {
                creatureProp.name == "Phoenix" ? < h3 > "Scrawrra"</h3> : ''
            }
            {
                creatureProp.origin == "Flordah" ? "⚠️" : "🙏"
            }


        </li >
    )
}

export default CreatureItem;