import React from 'react';

interface Part {
    id: number;
    name: string;
}

interface PartListProps {
    Parts: Part[];
}

const PartList: React.FC<PartListProps> = ({ Parts }) => {
    return (
        <div>
            <h3>Part List:</h3>
            <ul>
                {Parts.map((part) => (
                    <li key={part.id}>
                        {part.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PartList;
