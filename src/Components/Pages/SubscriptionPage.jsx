import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const SubscriptionPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const subscriptionOptions=[
    { value: "1", label: " 1min" ,price:parseInt("$8")},
    { value: "5", label: " 5days" ,price:parseInt('$13.99')},
    { value: "10", label: "10 days",price:parseInt('$19.56') },
  
  ]
  const handleSubmit=(price)=>{
    console.log(price)
  }
  
    return (
        <div className=" my-6">
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/rtX5jmR/subscriber-concept-illustration-114360-4117.jpg)'}}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Subscription 
     
      </h1>
      <Select subscriptionOptions
        options={subscriptionOptions}
        value={selectedOption}
        onChange={setSelectedOption}
      />

      <p className="mb-5 text-red-600 font-bold"> !!!Remember If you Subscription Period  Over You Will Be Normal   User Like before </p>
<Link to="">
<button className="btn   my-20 btn-outline btn-error" onClick={()=>handleSubmit(subscriptionOptions.price)}>Subscribe</button>
</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SubscriptionPage;