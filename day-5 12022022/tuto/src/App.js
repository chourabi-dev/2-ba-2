import Contact from "./componenets/Contact";
import Navbar from "./componenets/Navbar";
import Product from "./componenets/Product";

function App() {


  const contacts= [
    { name:"chourbai taher1", email:"tchourabi@gmail.com" },
    { name:"chourbai taher2", email:"tchourabi@gmail.com" },
    { name:"chourbai taher3", email:"tchourabi@gmail.com" },
    { name:"chourbai taher4", email:"tchourabi@gmail.com" },
    { name:"chourbai taher5", email:"tchourabi@gmail.com" },
    { name:"chourbai taher6", email:"tchourabi@gmail.com" },
    
  ];


  const products = [
    { id:1 , title:"iphone x", price: 1000 , photoURL:"https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg" },
    { id:2 , title:"iphone x", price: 1000 , photoURL:"https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg" },
    { id:3 , title:"iphone x", price: 1000 , photoURL:"https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg" },
    { id:4 , title:"iphone x", price: 1000 , photoURL:"https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg" },
    { id:5 , title:"iphone x", price: 1000 , photoURL:"https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_back_glass_big.jpg.large.jpg" },
    
  ]



  return (
    <div >

    <Navbar />


    { /**  props  */ }


    {
      /*
      <Contact  fullname="test user" email="user@gmail.com"   />
    
    <Contact  fullname="test user 2" email="user@gmail.com2"   />
    
    
    {
      contacts.map( ( c )=>{ 
        return <Contact fullname={ c.name }  email={ c.email  }  />

       } )
    }
      */
    }


    <div className="row">
    {
      products.map( (p)=>{ 
        return <div className="col-md-4"><Product photoURL={ p.photoURL } title={ p.title } price={ p.price }  /></div>
       } )
    }
    </div>
    

    </div>
  );
}

export default App;
