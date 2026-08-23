function About(){
    return(
<>
<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-blue-400 text-white
flex items-center justify-center text-5xl font-bold">
    ₹
</div>
   
      <h2 className="text-center text-2xl font-bold mt-5">
        Personal Finance Dashboard
      </h2>

      <p className="text-gray-500 mt-2 text-center">
        Track your money
      </p>

      </div>


      <div className="mt-10 divide-y">
        <div className="flex justify-between py-4">
            <span>Version</span>
            <span className="text-gray-500">v1.0.0</span>
            </div>
   
   <div className="flex justify-between py-4">
<span>Developer</span>
<span className="text-gray-500">Shivam Panwar</span>
    </div>

        
      </div>
      <p className="text-center text-gray-400 mt-10">
        © Personal Finance Dashboard
      </p>
</>

    );
}
export default About