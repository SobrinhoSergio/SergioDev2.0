import React from 'react';
import reactImage from '../images/react.png';
import figmaImage from '../images/figma.png';
import jsImage from '../images/js.png';
import tsImage from '../images/ts.png';
import mongoImage from '../images/mongo.png';
import phpImage from '../images/php.png';
import nodeImage from '../images/node.png';

const Tecnologias = () => {
  return (
    <main>
      <h1>Tecnologias</h1>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <img src={reactImage} alt="React" />
        </div>
        <div>
          <img src={figmaImage} alt="Figma" />
        </div>
        <div>
          <img src={jsImage} alt="JavaScript" />
        </div>
        <div>
          <img src={tsImage} alt="TypeScript" />
        </div>
        <div>
          <img src={mongoImage} alt="MongoDB" />
        </div>
        <div>
          <img src={phpImage} alt="PHP" />
        </div>
        <div>
          <img src={nodeImage} alt="Node.js" />
        </div>
      </div>
    </main>
  );
};

export default Tecnologias;
