import React, { useEffect, useState } from 'react'
import Nav from './navigation/Nav'
import Product from './Products/Product'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import axios from "axios"
import Card from './components/Card'

function App() {
  const [data,setdata]=useState([])
  const [query,setquery]=useState('')
  const [selectedcategory,setselectedcategory]=useState(null)
  const [result, setResult] = useState([]);
  useEffect(()=>{
      axios.get('http://localhost:4000/')
      .then(response => {
        setdata(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);
// radiofilter
const handlechangeradio=(event)=>{
  setselectedcategory(event.target.value)
}
// button filter
const handleclick=event=>{
  setselectedcategory(event.target.value)
}

// fct pour filter
function filterddata({data,selected,query}) {
  let filteredproducts=data
  //filtering input items
  if(query){
   filteredproducts = filteredproducts.filter((product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  }
  //selected filter
  if(selected){
   filteredproducts= filteredproducts.filter((data)=>
   data.category === selected || data.color === selected || data.company ===selected || data.title === selected|| data.newprice === selected
   );
  }
  
  return filteredproducts.map(({img,title,newprice,prevprice,review})=>{
    const imageUrl = `http://localhost:4000/${img}`;
    return(
    <Card 
    key={Math.random()}
    img={imageUrl}
    title={title}
    newprice={newprice}
    prevprice={prevprice}
    review={review}/>
    )
  })
}
useEffect(() => {

  const filteredData = filterddata({ data, selected: selectedcategory, query });
  setResult(filteredData);
}, [query, selectedcategory, data]);

console.log(result)
  return (
    <div>
      <Sidebar handlechangeradio={handlechangeradio} />
      <Nav  handleinputchang={setquery}/>
      <Recommended handleclick={handleclick}/>
      <Product result={result}/>
    
    </div>
  )
}

export default App