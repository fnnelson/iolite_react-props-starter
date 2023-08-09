import CreatureItem from "./CreatureItem";

export function CreatureList({ creatureList }) {
    return <ul>
        {creatureList.map(creature => (
            //list items render below, for each creature
            <CreatureItem key={creature.id} creatureProp={creature} />
        )
        )}
    </ul>;
}

