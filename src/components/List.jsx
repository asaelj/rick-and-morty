import React from 'react';
import '../assets/components/List.css';

const List = ({ children }) => (
  <section className="list">
    <ul className="list__body">
      {children}
    </ul>
  </section>
);

export default List;