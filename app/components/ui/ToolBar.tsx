import React from "react";
import { FaBrush, FaEraser, FaUndo, FaMinus, FaPlus } from "react-icons/fa";

interface ToolBarProps {
  activeTool: "draw" | "erase";
  onToolClick: (tool: "draw" | "erase") => void;
  onClear: () => void;
  brushSize: number;
  onBrushSizeChange: (size: number) => void;
}

export const ToolBar: React.FC<ToolBarProps> = ({ 
  activeTool, 
  onToolClick, 
  onClear, 
  brushSize, 
  onBrushSizeChange 
}) => {
  return (
    <div className="bg-gray-50 rounded-xl p-4 space-y-4 border border-gray-200">
      <h3 className="font-semibold text-gray-800 text-center mb-4 -ml-6">🛠️ Tools</h3>
      
      {/* Drawing Tools */}
      <div className="space-y-2">
        <button
          onClick={() => onToolClick("draw")}
          className={`w-full flex items-center justify-center gap-2 h-12 px-4 rounded-lg border ${
            activeTool === "draw" ? "bg-blue-500 text-white" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          <FaBrush />
          Brush
        </button>
        
        <button
          onClick={() => onToolClick("erase")}
          className={`w-full flex items-center justify-center gap-2 h-12 px-4 rounded-lg border ${
            activeTool === "erase" ? "bg-blue-500 text-white" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
          }`}
        >
          <FaEraser />
          Eraser
        </button>
      </div>

      {/* Brush Size Control */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Brush Size</span>
          <span className="text-sm text-gray-500">{brushSize}px</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => onBrushSizeChange(Math.max(1, brushSize - 1))}
            disabled={brushSize <= 1}
            className="p-2 rounded-lg border bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            <FaMinus />
          </button>

          <input
            type="range"
            value={brushSize}
            onChange={(e) => onBrushSizeChange(parseInt(e.target.value))}
            min={1}
            max={20}
            step={1}
            className="flex-1"
          />

          <button
            onClick={() => onBrushSizeChange(Math.min(20, brushSize + 1))}
            disabled={brushSize >= 20}
            className="p-2 rounded-lg border bg-gray-200 hover:bg-gray-3 disabled:opacity-50"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Clear Button */}
      <button
        onClick={onClear}
        className="w-full flex items-center justify-center gap-3 h-12 px-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
      >
        <FaUndo />
        Clear Canvas
      </button>
    </div>
  );
};
