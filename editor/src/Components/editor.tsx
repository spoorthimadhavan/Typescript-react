import React from 'react';
import styled from 'styled-components';

interface EditorProps {
    canvas: React.ReactNode;
}

const EditorContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const Editor: React.FC<EditorProps> = ({ canvas }) => {
    return <EditorContainer>{canvas}</EditorContainer>;
};

export default Editor;
