## Table of Contents

1. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Usage](#usage)
   - [Styling](#styling)
   - [Development Server](#development-server)
4. [Contributing](#contributing)
5. [License](#license)

## Usage

## Project Structure

The project is structured with each section being broken into 100vh chunks and organized as children of the `App` component.

```jsx
// App.js
import React from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

const App = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      {/* Add more sections as needed */}
    </div>
  );
};

export default App;

### Styling

This project follows a structured approach to styling, utilizing vanilla CSS with each component having its associated file for classes. 
The global styles are defined in `src/index.css`.

#### Component Styling

Each component in the `src/components/` directory has its own associated CSS file. 
This approach promotes modularity and helps to keep styles organized.
