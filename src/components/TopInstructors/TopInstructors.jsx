import React from 'react';

const TopInstructors = () => {
    
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('user.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    console.log(instructors);


    return (
        <div>
            
        </div>
    );
};

export default TopInstructors;