## WhiteBoard

White Board is a virtual drawing application built with React, HTML Canvas, and Rough.js, designed to simulate a hand-drawn sketch style. It provides a range of tools to draw lines, shapes, and text with customizable colors and stroke widths. Key features include undo/redo, eraser, and the option to export your canvas as a PNG image for easy sharing or saving.

## Features

🖌️ Freehand drawing with smooth brush strokes
📏 Create shapes like lines, rectangles, circles, and arrows
✏️ Insert text anywhere on the canvas
🎨 Choose custom stroke colors, fill colors, and line thickness
↩️ Step backward or forward with undo and redo support
🧹 Remove any element using the eraser tool
📥 Save your drawing by downloading it as a PNG file
🌗 Switch between light mode and dark mode for better visibility

## Project Structure

```bash
whiteboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Board/
│   │   │   ├── index.js
│   │   │   └── index.module.css
│   │   ├── Toolbar/
│   │   │   ├── index.js
│   │   │   └── index.module.css
│   │   ├── Toolbox/
│   │   │   ├── index.js
│   │   │   └── index.module.css
│   ├── store/
│   │   ├── board-context.js
│   │   ├── BoardProvider.js
│   │   ├── toolbox-context.js
│   │   ├── ToolboxProvider.js
│   ├── constants.js
│   ├── utils/
│   │   ├── element.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Installation 


1. Clone the repository:
  ```bash
git clone https://github.com/yourusername/whiteboard.git
 ```

2. Navigate to the project directory:
 ```bash
cd whiteboard
```
3. install the dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

# Available Scripts
In the project directory, you can run:

## npm start
Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

## npm build
Builds the app for production to the build folder.

## npm test
Launches the test runner in the interactive watch mode.

## npm eject
Ejects the project from create-react-app configuration. Use this only if you know what you are doing.

## Dependencies
@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
classnames
icons
perfect-freehand
react
react-dom
react-icons
react-scripts
roughjs
web-vitals

## Dev Dependencies
ajv
tailwindcss
Folder Structure
src/components/Board/index.js
Handles the drawing logic and renders the canvas.

## src/components/Board/index.module.css
CSS module for styling the board component.

## src/components/Toolbar/index.js
Contains the toolbar with drawing tools and actions.

## src/components/Toolbar/index.module.css
CSS module for styling the toolbar.

## src/components/Toolbox/index.js
Contains the toolbox for selecting colors and sizes.

## src/components/Toolbox/index.module.css
CSS module for styling the toolbox.

## src/store/board-context.js
Context for managing the board state.

## src/store/BoardProvider.js
Provider component for the board context.

## src/store/toolbox-context.js
Context for managing the toolbox state.

## src/store/ToolboxProvider.js
Provider component for the toolbox context.

## src/constants.js
Contains constants used throughout the application.

## src/utils/element.js
Utility functions for creating and managing board elements.

## src/App.js
Main application component that renders the board, toolbar, and toolbox.

## src/App.css

# Author
White Board is created and maintained by Rudraksh Agnihotri




