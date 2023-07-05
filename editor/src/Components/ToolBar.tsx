import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

interface ToolbarProps {
    onAddText: () => void;
    onAddImage: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAddText, onAddImage }) => {

    return (
        <div className="toolbar">
            <ButtonGroup>
                <Button onClick={onAddText}>Add Text</Button>
                <Button onClick={onAddImage}>Add Image</Button>
            </ButtonGroup>

        </div>
    );
};

export default Toolbar;
