import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const SubscriptionPage = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const subscriptionOptions=[
    { value: "1", label: " 1min" ,},
    { value: "5", label: " 5days" ,},
    { value: "10", label: "10 days",},
  
  ]
  const handleSubmit=(value)=>{
    console.log(value)
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
      className="text-slate-600"
        options={subscriptionOptions}
        value={selectedOption}
        onChange={setSelectedOption}
      />

      <p className="mb-5 text-red-600 font-bold"> !!!Remember If you Subscription Period  Over You Will Be Normal   User Like before </p>
<Link to="">
<button className="btn   my-20 btn-outline btn-error" onClick={()=>handleSubmit(subscriptionOptions.value)}>Subscribe</button>
</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SubscriptionPage;