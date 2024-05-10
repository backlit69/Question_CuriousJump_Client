import React from 'react'

const animals = ['Cat','Dinosaur','Frog','Hippo','Hyena','Leopard','Monkey','Starfish','Turtle','Zebra'];
const fruits = ['Apple','Banana','Black-berry','Cherry','Coconut','Green-apple','Lemon','Orange','Peach','Pear','Starfruit','Strawberry','Watermelon']
const vegetables = ["Beetroot","Brinjal","Capsicum","Carrot","Corn","Cucumber","Garlic","Ginger","Greenchili","Lemon","Onion","Potato","Pumpkin","Tomato"]

function optionlist() {
  return (
    <>  
<div style={{display:"flex"}}>
<div style={{width: '25%'}}>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Animal</th>
    </tr>
  </thead>
  <tbody>
    {animals.map((animal,index)=>{
      return <tr>
      <td>{animal}</td>
      </tr>
    })}  
  </tbody>
</table>
</div><div style={{width: '25%'}}>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Fruits</th>
    </tr>
  </thead>
  <tbody>
    {fruits.map((animal,index)=>{
      return <tr>
      <td>{animal}</td>
      </tr>
    })}  
  </tbody>
</table>
</div>
<div style={{width: '25%'}}>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Vegetables</th>
    </tr>
  </thead>
  <tbody>
    {vegetables.map((animal,index)=>{
      return <tr>
      <td>{animal}</td>
      </tr>
    })}  
  </tbody>
</table>
</div>

</div>
    </>
  )
}

export default optionlist