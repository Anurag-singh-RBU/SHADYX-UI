import { useState } from "react";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  const [customColor, setCustomColor] = useState<string>(color);

  const predefinedColors: string[] = [
    "#000000", // Black
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#800080", // Purple
    "#FFC0CB", // Pink
    "#A52A2A", // Brown
    "#808080", // Gray
    "#FFE4E1", // Light Pink
    "#98FB98", // Light Green
    "#87CEEB", // Sky Blue
    "#DDA0DD", // Plum
  ];

  const handleColorClick = (selectedColor: string) => {
    onChange(selectedColor);
    setCustomColor(selectedColor);
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setCustomColor(newColor);
    onChange(newColor);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 sm:p-3 sm:rounded-lg sm:max-w-xs sm:mx-auto">
      <h3 className="font-semibold text-gray-800 text-center mb-4 sm:text-base -ml-6">🎨 Colors</h3>
      
      {/* Current Color Display */}
      <div className="mb-4 text-center">
        <div 
          className="w-12 h-12 rounded-full border-4 border-white shadow-lg mx-auto mb-2"
          style={{ backgroundColor: color }}
        />
        <span className="text-sm text-gray-600">Current Color</span>
      </div>

      {/* Predefined Colors Grid */}
      <div className="grid grid-cols-4 gap-2 mb-4 sm:gap-1 justify-items-center">
        {predefinedColors.map((predefinedColor) => (
          <button
            key={predefinedColor}
            onClick={() => handleColorClick(predefinedColor)}
            className={`w-12 h-12 sm:w-9 sm:h-9 rounded-lg border-2 transition-all hover:scale-110 ${
              color === predefinedColor 
                ? "border-gray-800 shadow-lg" 
                : "border-gray-300 hover:border-gray-500"
            }`}
            style={{ backgroundColor: predefinedColor }}
          />
        ))}
      </div>

      {/* Custom Color Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 ml-2">Custom Color</label>
            <div className="flex justify-evenly gap-2 mt-1">
            <input
                type="color"
                value={customColor}
                onChange={handleCustomColorChange}
                className="w-12 h-10 rounded-md border border-gray-300 p-1"
            />
            <input
                type="text"
                value={customColor}
                onChange={handleCustomColorChange}
                placeholder="#FFFFFF"
                className="h-10 text-sm border border-gray-300 rounded-md px-2 w-[120px]"
            />
            </div>

      </div>
    </div>
  );
};
