import React from 'react';
import List from '../components/List';
import Card from '../components/Card';
import Input from '../components/form/Input';
import useInitialData from '../hooks/useInitialData';

const Home = () => {
  const [filter, setFilter] = React.useState('');
  const data = useInitialData(filter);
  let typing = null;

  const handleChange = (e) => {
    clearTimeout(typing);
    typing = setTimeout(() => {
      setFilter(e.target.value);
    }, 1000);
  };

  return (
    <>
      <Input onChange={handleChange} />
      <List>
        {
          data.map((character, index) => <Card key={index} character={character} />)
        }
      </List>
    </>
  );
}

export default Home;
