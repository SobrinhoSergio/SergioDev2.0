// MenuItem.js
import React from 'react';

const MenuItem = ({ item, onClick }) => (
  <li className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded">
    <a href={item.link} onClick={(e) => onClick(e, item.link)}>
      {item.text}
    </a>
  </li>
);

export default MenuItem;
