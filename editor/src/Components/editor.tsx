import React from 'react';
import { Box } from '@mui/material';

type EditorProps = {
    canvas: React.ReactNode;
};

const Editor: React.FC<EditorProps> = ({ canvas }) => {
    return <Box>{canvas}</Box>;
};

export default Editor;
