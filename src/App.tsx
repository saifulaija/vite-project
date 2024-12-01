import { X } from "lucide-react";
import logo from "../public/Logotype.png";

const App = () => {
  return (
    <div className="p-20">
      <div
        className="container mx-auto border p-6 relative overflow-hidden"
     
      >
        {/* Content */}
        <div className="flex flex-col ">
          <img src={logo} alt="Logo" className="w-60 mb-4" />
          <div className="flex justify-between">
            <div className="flex gap-3">
              <p className="text-lg font-semibold text-gray-700">Home</p>
              <p className="text-lg font-semibold text-gray-700">Contact</p>
            </div>
            <div>
              <X className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;



