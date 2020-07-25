import React, { useState, useEffect, Fragment } from 'react';

import Search from './components/Search';
import List from './components/List';
import TotalPrice from './components/TotalPrice';
import Fields from './components/Fields';

import './App.css';

const listProducts = [
  {"qtd": 2, name: "Rice", price:0.60, isComplete: false},
  {"qtd": 2, name: "Pasta", price:0.65, isComplete: false},
  {"qtd": 3, name: "Tuna Fish", price:0.35, isComplete: false},
  {"qtd": 3, name: "Crackers", price:1, isComplete: false},
  {"qtd": 1, name: "Olive Oil", price:5, isComplete: false},
  {"qtd": 1, name: "Oil", price:5, isComplete: false}
]

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [inputQtd, setInputQtd] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleChange = (event) => {
    setLoading(true)
    setSearchTerm(event.target.value);
    setLoading(false)
  }

  const handleChangeQtd = (event) => {
    setInputQtd(event.target.value);
  }

  const handleChangeName = (event) => {
    setInputName(event.target.value);
  }

  const handleChangePrice = (event) => {
    setInputPrice(event.target.value);
  }

  const resultPrice = () => {
    const prodsCalc = searchResults.map(item => (item.price * item.qtd))
    return prodsCalc.reduce((acc, item) => (acc += item), 0);
  }

  const complete = index => {
    const newSearchResults = [...searchResults];
    
    newSearchResults[index].isCompleted = !newSearchResults[index].isCompleted;
    setSearchResults(newSearchResults);
  }

  const remove = index => {
    const removeSearchResults = [...searchResults];
    removeSearchResults.splice(index, 1);
    setSearchResults(removeSearchResults);
  }

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 500));
  }

  const submit = (e) => {
    e.preventDefault();
    const addSearchResults = [...searchResults, {"qtd": inputQtd, "name": inputName, "price":inputPrice, "isComplete": false}];
    setSearchResults(addSearchResults);
    setInputQtd('');
    setInputName('');
    setInputPrice('');
  }
  
  useEffect(() => {
    setLoading(true);
    fakeRequest().then(() => {
      const result = listProducts.filter(list => 
        list.name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(result);
      setLoading(false);
    });
    
  },[searchTerm])

  return (
    <div className="container">
      <div className="card-list">
        <h1>PRODUCTS LIST</h1>
        <p class="wrapper">
          <Search 
            value={searchTerm} 
            onChange={handleChange} 
            placeholder="Find the product..."
          />
        </p>
        {isLoading ? (<div class="loader"></div>) : (
        <Fragment>
        {searchResults.map((product, index) => (
          <List index={index} product={product} complete={complete} remove={remove} />
        ))}
        <Fields 
          submit={submit} 
          valueInputQtd={inputQtd} 
          handleChangeQtd={handleChangeQtd}
          valueInputName={inputName} 
          handleChangeName={handleChangeName}
          valueInputPrice={inputPrice}
          handleChangePrice={handleChangePrice}
        />
      <TotalPrice 
        price={resultPrice()}
      />
      </Fragment>) }
      </div>
    </div>
  );
}

export default App;