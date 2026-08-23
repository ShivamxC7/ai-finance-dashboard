import { NavLink } from "react-router-dom";

function Sidebar(){
    return(<>
    
    <aside className="bg-gray-800 w-64 min-h-screen sticky top-0 text-white">
        <h2 className="text-xl font-bold mb-8">
            Menu
        </h2>
<div className="space-y-4">

<NavLink
to="/"
className= {({ isActive }) =>
`block p-3 rounded-lg ${
    isActive ? "bg-blue-600" : "hover:bg-gray-700"
}`
}  >       
    🏠 Dashboard
</NavLink> 

 <NavLink
to="/transactions"
className= {({ isActive }) =>
`block p-3 rounded-lg ${
    isActive ? "bg-blue-600" : "hover:bg-gray-700"
}`
}  >       
   💳 Transactions
</NavLink> 

  <NavLink
to="/ai-coach"
className= {({ isActive }) =>
`block p-3 rounded-lg ${
    isActive ? "bg-blue-600" : "hover:bg-gray-700"
}`
}  >       
   🤖 AI Coach
</NavLink> 

  <NavLink
to="/settings"
className= {({ isActive }) =>
`block p-3 rounded-lg ${
    isActive ? "bg-blue-600" : "hover:bg-gray-700"
}`
}  >       
  ⚙️ Settings  
</NavLink> 

         </div>
    </aside>
  
    
    
    </>);
}

export default Sidebar;