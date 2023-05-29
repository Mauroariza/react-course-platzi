
import Home from "../Home/Index";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders"; 
import MyOrder from "../MyOrder";
import NotFound from "../NotFound"; 
import SignIn from "../Singin";

import './Index.css'

function App() {
  return (
    <div className="bg-red-100">
      <header className="App-header">
        <p>
          <Home pageName="this is my Home" />
          <MyAccount pageName="MyAccount" />  
          <MyOrders pageName="MyOrders" />
          <MyOrder pageName="MyOrder" />
          <NotFound pageName="NotFound" />
          <SignIn pageName="SignIn" />

        </p>
      </header>
    </div>
  );
}
export default App;

