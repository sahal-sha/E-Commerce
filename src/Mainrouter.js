
import Home from "./Component/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Component/User/Login";
import Register from "./Component/User/Register";
import { Route, Routes, useNavigate } from "react-router-dom";
import { createContext,useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

import {
    validateName,
    validateEmail,
    validateMnumber,
    validatePassword,
    validateCpassword,
} from "./ValidateUser";
import { Items } from "./Component/Items";
import Shop from "./Component/Home/Shop/Shop";
import Cart from "./Component/Home/Cart/Cart";
import Payment from "./Component/Home/Payment/Payment";
import Bedroom from "./Component/Home/Shop/Catgrs/Bedroom";
import Dinning from "./Component/Home/Shop/Catgrs/Dinning";


import Kids from "./Component/Home/Shop/Catgrs/Kids";
import Office from "./Component/Home/Shop/Catgrs/Office";
import Outdoor from "./Component/Home/Shop/Catgrs/Outdoor";
import Seating from "./Component/Home/Shop/Catgrs/Seating";
import Storage from "./Component/Home/Shop/Catgrs/Storage";
import Viewproduct from "./Component/Home/Shop/Viewproduct";
import Search from "./Component/Home/Search/Search";
import NavBar from "./Component/Home/NavBar/Nav";
import Lights from "./Component/Home/Shop/Catgrs/Lights";
import Couches from "./Component/Home/Shop/Catgrs/Couches";
import Mirrors from "./Component/Home/Shop/Catgrs/Mirrors";
import Admin from "./Component/User/Admin/Admin";
import Products from "./Component/User/Admin/Products/Products";
import Users from "./Component/User/Admin/users/Users";
import Productview from "./Component/User/Admin/Products/Productview";
import Viewbedroom from "./Component/User/Admin/Products/ViewCatgr/Viewbedroom";
import Viewdinning from "./Component/User/Admin/Products/ViewCatgr/Viewdinning";
import Viewkids from "./Component/User/Admin/Products/ViewCatgr/Viewkids";
import Viewoffice from "./Component/User/Admin/Products/ViewCatgr/Viewoffice";
import Viewoutdoor from "./Component/User/Admin/Products/ViewCatgr/Viewoutdoor";
import Viewseating from "./Component/User/Admin/Products/ViewCatgr/Viewseating";
import Viewstorage from "./Component/User/Admin/Products/ViewCatgr/Viewstorage";
import Viewcouches from "./Component/User/Admin/Products/ViewCatgr/Viewcouches";
import Viewlights from "./Component/User/Admin/Products/ViewCatgr/Viewlights";
import Viewmirrors from "./Component/User/Admin/Products/ViewCatgr/Viewmirrors";
import Addproduct from "./Component/User/Admin/Products/Addproduct";
import Viewusers from "./Component/User/Admin/users/Viewusers";

export const Mycontext = createContext()


const Mainrouter = ()=> {


  const [adminlogin, setadminlogin] = useState(false)

    const nav = useNavigate()




           //Signup //


    const [valUser,setvalUser ] = useState([
      {email:"admin23@gmail.com", password:"admin23@",previlage:"admin"}])
    const validateUser = (name, email, mnumber, password, cpassword) => {
        const findUser = valUser.find((x) => x.email === email && x.mnumber === mnumber)
        if (!findUser) {
          if (validateName(name) && validateEmail(email) && validateMnumber(mnumber) && validatePassword(password) && validateCpassword(cpassword, password)) {
            setvalUser([
              ...valUser,
              { name: name, email: email, mnumber: mnumber, password: password }
            ])
            nav('/login')
          }                                                                           
        }
        else if(findUser){
          toast.error("User already exists!!!!!!")
        }
        else {
          toast.error("Register your account!!!!!!!")
        }
      }


         //Login//
      
  const [ifLogin, setifLogin] = useState(false)
  const [loguser, setloguser] = useState({ cart: []})
  const Loguser = (email, password) => {
    const findUser = valUser.find((x) => x.email === email && x.password === password)
    const findadmin = valUser.find((x) => x.email === email && x.password === password && x.previlage === "admin")
    if(findadmin){
      setadminlogin(true)
      nav('/Admin')
      return true;
    }
    if (findUser && validateEmail(email) && validatePassword(password)) {
      setloguser({ email: email, password: password, name: findUser.name })
      setCart(findUser.cart || [])
      nav('/')
      setifLogin(true)
    }
    else {
      toast.error("Email or Password is incorrect !!!!")
    }
  }

  const removeNavbarFrom = [
    '/Admin',
    '/Products',
    '/Productview/:Id',
    '/Viewbedroom',
    '/Viewdinning',
    '/Viewcouches',
    '/Viewlights',
    '/Viewmirrors',
    '/Viewkids',
    '/Viewoffice',
    '/Viewoutdoor',
    '/Viewseating',
    '/Viewstorage',
    '/Users',
    '/Viewusers/:Id',
    '/Addproduct'
  
  ];
  
  const currentPath = window.location.pathname;
  const isAdminpath = removeNavbarFrom.some((path) => currentPath.includes(path));
  

     //Search//

  const [search, setsearch] = useState(' ')
  const [searchresult , setsearchresult] = useState([{}])
  const searchpro = ()=>{
    const Searchproduct = item.filter((items)=>items.ProductName.toLowerCase().includes(search.toLowerCase()))
    setsearchresult(Searchproduct)
    nav('/Search')
  }
  

  // Cart //


  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (ifLogin) {
      setShow(true);
    }
  }
  

  const handleClose = () => setShow(false);

  const [cart, setCart] = useState([])
  const [item, setItem] = useState(Items)
  const Addcart = (id) =>{
    if (ifLogin) {
      const Finditem = item.find((x) =>x.Id ===id)
      if (Finditem) {
        //some using true or false 
        const Data = cart.some((x) =>x.Id === id)
        
        if (Data) {
          const UpdateCart = cart.map((x) => x.Id === id? {...x,Qty: x.Qty + 1, Total: (x.Qty + 1) * x.Price} : x)
          setCart(UpdateCart)
          
        }
        else {
          setCart([...cart, {
            ...Finditem,
            Qty: 1,
            Total: ((Finditem.Qty) * (Finditem.Price))
            
          }])
          
        }
      }
      }
      else{
        toast.error("Oops! It looks like you need to log in first before adding products to your cart. Please login to continue shopping.")
        nav('./Login')
      }
    }
    console.log(cart)

           // Cart total Bill //

    let tot = 0;
    const findUser = valUser.find((item)=> item.email === loguser.email)
    if(findUser && findUser.cart) {
      //accumulator and current value // accumulator will be zero value
      tot = cart.reduce((Tot,item) =>item.Total + Tot, 0)
    }
        

     // Buyitem //

    const [buyitem, setbuyitem] = useState([{}])
    const Buynow = (id) => {
      if(ifLogin){
        const findbuyitem = item.find((item)=> item.Id === id)
        if (findbuyitem) {
          const newBuytot = [{ ...findbuyitem, Total: (findbuyitem.Qty) * (findbuyitem.Price)}]
          setbuyitem(newBuytot)
          nav('/Payment')
        }
        else {
          setbuyitem(cart)
          nav('/Payment')
        }
      } else {
        toast.error("Oops! It looks like you need to log in first before buying products. Please login to continue shopping.")
        nav("/Login")
      }

    }
              //Buyitem.Bill //

    const buytot = buyitem.reduce((tot, item)=> item.Total + tot,0)


      // Logout //

    const Logout =() => {
      const findUser = valUser.map((x)=>x.email === loguser.email ? { ...x, cart: cart} : x)
      setvalUser(findUser)
      setloguser({})
      setCart([])
      nav('/')
      setifLogin(false)
    }


  

  

  return(
    <>
    <Mycontext.Provider value={{item , setItem , adminlogin}}>
    
    {!isAdminpath && <NavBar Logout={Logout} Loguser={loguser} ifLogin={ifLogin} Items={Items} searchpro={searchpro} setsearch={setsearch} /> }
    <Toaster position="top-center"/>
      <Routes>
    
    <Route path="/" element={<Home />}/>
    <Route path="/register" element={<Register validateUser={validateUser} />}/>
    <Route path="/login" element={<Login Loguser={Loguser} />}/>
    <Route path="/Shop" element={<Shop Addcart={Addcart} nav={nav} />}/>
    <Route path='/Cart' element={<Cart cart={cart} setCart={setCart} tot={tot} ifLogin={ifLogin} Loguser={loguser} Buynow={Buynow} />} />

    <Route path='/Payment' element={<Payment Loguser={loguser} cart={cart} tot={tot} Buynow={Buynow} buyitem={buyitem} buytot={buytot} valUser={valUser} setvalUser={setvalUser} />} />

    <Route path='/Bedroom' element={<Bedroom Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
    <Route path='/Dinning' element={<Dinning Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
    
    <Route path='/Kids' element={<Kids Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
    <Route path='/Office' element={<Office Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
    <Route path='/Outdoor' element={<Outdoor Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />     
    <Route path='/Seating' element={<Seating Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />                                    
    <Route path='/Storage' element={<Storage Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
    <Route path='/Viewproduct/:Id' element={<Viewproduct Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} Buynow={Buynow} />} />
    <Route path='/Search' element={<Search searchresult={searchresult} />} />
    <Route path='/Lights' element={<Lights  Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />}/>
    <Route path='/Mirrors' element={<Mirrors Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav} />} />
    <Route path='/Couches' element={<Couches Addcart={Addcart} handleShow={handleShow} handleClose={handleClose} show={show} Loguser={loguser} nav={nav}/>} />
    <Route path='/Admin' element={<Admin />} />
    <Route path='/Products' element={<Products nav={nav} />} />
    <Route path='/Productview/:Id' element={<Productview nav={nav}/>} />
    <Route path='/Viewbedroom' element={<Viewbedroom nav={nav} />} />
    <Route path='/Viewdinning' element={<Viewdinning nav={nav} />} />
    <Route path='/Viewcouches' element={<Viewcouches nav={nav} />} />
    <Route path='/Viewlights' element={<Viewlights  nav={nav}/>} />
    <Route path='/Viewmirrors' element={<Viewmirrors  nav={nav}/>} />
    <Route path='/Viewkids' element={<Viewkids nav={nav} />} />
    <Route path='/Viewoffice' element={<Viewoffice nav={nav} />} />
    <Route path='/Viewoutdoor' element={<Viewoutdoor nav={nav} />} />
    <Route path='/Viewseating' element={<Viewseating nav={nav} />} />
    <Route path='/Viewstorage' element={<Viewstorage nav={nav} />} />
    <Route path='/Users' element={<Users  nav={nav} valUser={valUser}/>} />
    <Route path='/Viewusers/:Id' element={<Viewusers valUser={valUser} setvalUser={setvalUser} loguser={loguser} buyitem={buyitem} findUser={findUser}/>} />
    <Route path='/Addproduct' element={<Addproduct setItem={setItem} item={item} nav={nav}/>}/>
    </Routes>
    </Mycontext.Provider>



   
</>
  )


}
export default Mainrouter