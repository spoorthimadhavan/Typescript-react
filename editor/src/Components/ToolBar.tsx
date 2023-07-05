import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

type ToolbarProps = {
    onAddText: () => void;
    onAddImage: () => void;
};

const Toolbar: React.FC<ToolbarProps> = ({ onAddText, onAddImage }) => {
    return (
        <ButtonGroup>
            <Button onClick={onAddText}>Add Text</Button>
            <Button onClick={onAddImage}>Add Image</Button>
        </ButtonGroup>
    );
};

export default Toolbar;
