function SummaryCard({icon, title, amount}){
    return(<>
    <div className="bg-white rounded-xl shadow-md p-2 w-64 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center gap-3">
            <div className="text-3xl">
                {icon}
                </div>
                <div>
        <h3 className="text-gray-500 text-sm">
            {title}
        </h3>
        <h2 className="text-2xl font-bold mt-2">{amount}
        </h2>
             </div>
         </div>
    </div>
    
    </>);
}
export default SummaryCard;