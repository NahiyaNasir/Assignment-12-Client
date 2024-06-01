import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <div className=" grid lg:grid-cols-2 md:grid-cols-1">
      <div className="card w-96  bg-[#D1A054] ">
        <p className=" absolute right-0 bg-orange-600 mt-5 mr-6 text-white p-2 rounded-lg ">
          Free Users
        </p>
        <br />
        <div className="card-body">
          <h2 className="card-title"> Free For 1 Week!</h2>
          <br />
      
            <h2>Limited Article Access:</h2>
            <li className="list-disc">
              Free user can Access 3 number of free articles per month
            </li>
            <h2>Ad-Supported Content:</h2>
            <li>
            Access to content with advertisements displayed on the site
            </li>
            <h2>Breaking News Alert:</h2>
            <li>
            Receive notifications for major breaking news events
            </li>

         

          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96  bg-[#D1A054] ">
        
        <p className=" absolute right-0 bg-orange-600 mt-5 mr-6 text-white p-2 rounded-lg ">
          Premium Users !!
        </p>
        <br />
        <div className="card-body">
          <h2 className="card-title justify-between">Premium Due!   <br /> $13.89</h2>
         <h2>Unlimited Article Access :</h2>
         <li>Unlimited access to all articles and archives on the website</li>
         <h2>Ad-Free Experience:</h2>
         <li>Browse the website without any advertisements</li>
         <li>Enhanced, cleaner reading experience</li>
         <h2>Exclusive Content :</h2>
         <li>Access to premium-only articles, in-depth reports, and investigative journalism</li>
         <h2>Member-Only Events :</h2>
         <li>Opportunities to participate in exclusive community discussions and forums.</li>

          <div className="card-actions justify-end">
           <Link to="/subscribePage">
           <button className="btn">Buy Now</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
