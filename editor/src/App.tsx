import React, { useState } from 'react';
import Toolbar from './Components/ToolBar';
import Editor from './Components/editor';

const App: React.FC = () => {
  const [canvasContent, setCanvasContent] = useState<React.ReactNode>(null);

  const handleAddText = () => {
    const newTextElement = <p>New Text Element</p>;
    setCanvasContent((prevContent) => (
      <>
        {prevContent}
        {newTextElement}
      </>
    ));
  };

  const handleAddImage = () => {
    const newImageElement = <img src="/Assembly.jpg" alt="Assembly" style={{ width: '200px', height: 'auto' }} />;
    setCanvasContent((prevContent) => (
      <>
        {prevContent}
        {newImageElement}
      </>
    ));
  };

  return (
    <div>
      <Toolbar onAddText={handleAddText} onAddImage={handleAddImage} />
      <Editor canvas={canvasContent} />
    </div>
  );
};

export default App;