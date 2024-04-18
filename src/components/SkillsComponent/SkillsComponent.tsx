import React, {useEffect, useState} from 'react';
import {Skill} from "../../mocks/SkillsMock";
import {useCounter} from "../../hooks/useCounter";

interface Props {
    skills: Skill[]
}

const SkillsComponent: React.FC<Props> = ({skills}) => {
    const [loading, setLoading] = useState(true);
    const {count, increment, decrement} = useCounter({initialCount: 0})
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])
    return (
        <ul>
            {skills.length > 0 && skills.map((skill: Skill) => (
                <li key={skill.id.toString()}>{skill.title}</li>
            ))}
            {loading === false ? <button>Loading Finished</button> :
                <button onClick={() => setLoading(false)}>Loading</button>}
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

        </ul>
    )
}
export default SkillsComponent;