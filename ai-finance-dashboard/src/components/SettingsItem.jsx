import { FaChevronRight } from "react-icons/fa";

function SettingsItem({
  icon,
  title,
  value,
  danger = false,
  toggle,
  checked,
  onToggle,
  onClick,
}) {
  return (
  <div
      onClick={onClick}
      className={`w-full flex items-center justify-between px-5 py-4
      hover:bg-gray-50 transition ${
        danger
         ? "text-red-600" :
          "text-gray-900"
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="text-xl">{icon}</span>

        <span className="font-medium">
          {title}
        </span>
      </div>

     <div className="flex items-center gap-3">

  {toggle ? (

    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className={`w-12 h-6 rounded-full transition relative ${
        checked
          ? "bg-blue-600"
          : "bg-gray-300"
      }`}
    >

      <div
        className={`absolute top-0.5 h-5 w-5 bg-white rounded-full transition ${
          checked
            ? "left-6"
            : "left-0.5"
        }`}
      />

    </button>

  ) : (

    <>
      {value && (
        <span className="text-gray-500">
          {value}
        </span>
      )}

      <FaChevronRight className="text-gray-400"/>

    </>

  )}

</div>

    </div>
  );
}

export default SettingsItem;