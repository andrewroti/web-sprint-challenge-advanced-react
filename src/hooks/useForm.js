// write your custom hook here to control your checkout form
import { useState } from 'react';

function UserInput(){
    const [value, setValue] = useState('');
    const handleChanges = newValue =>{
        setValue(newValue);
    };
    return [value, setValue, handleChanges];
};

export default UserInput;




