import React, {ChangeEvent, useState, useEffect} from 'react';

const Todo: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [data, setData] = useState<string>('')
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const updateData = () => {
        setData("Updated Data")
    }
    useEffect(() => {
        setData('Hello')
    }, []);

    return (
        <div>

        </div>
    )
}
export default Todo;