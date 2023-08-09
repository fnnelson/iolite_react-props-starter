function CreatureItem({ creatureProp }) {
    return (
        <li>
            {creatureProp.name} is from {creatureProp.origin}
        </li>
    )
}

export default CreatureItem;