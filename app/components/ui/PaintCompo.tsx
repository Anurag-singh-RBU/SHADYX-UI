'use client';
import React, {useState} from 'react';
import { Monitor, FileCode } from 'lucide-react';
import CodeBlock from './CodeBlock';
import {ScriptCopyBtn} from './ScriptCopyBtn';
import { ScriptImport } from './ScriptImport';
import { PaintBoard } from './PaintBoard';

const Spotlight: React.FC = () => {

const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
const codeString = `import { useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas, PencilBrush } from "fabric";
import { ToolBar } from "./ToolBar";
import { ColorPicker } from "./ColorPicker";
import { Toaster } from "sonner";

export const PaintBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [activeColor, setActiveColor] = useState<string>("#000000");
  const [activeTool, setActiveTool] = useState<"draw" | "erase">("draw");
  const [brushSize, setBrushSize] = useState<number>(5);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 700,
      height: 200,
      backgroundColor: "#ffffff",
    });

    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush = new PencilBrush(canvas);
    canvas.freeDrawingBrush.color = activeColor;
    canvas.freeDrawingBrush.width = brushSize;

    console.log("Canvas initialized with freeDrawingBrush:", canvas.freeDrawingBrush);

    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  });

  useEffect(() => {
    if (!fabricCanvas || !fabricCanvas.freeDrawingBrush) return;

    if (activeTool === "draw") {
      fabricCanvas.freeDrawingBrush.color = activeColor;
      fabricCanvas.freeDrawingBrush.width = brushSize;
    } else if (activeTool === "erase") {
      fabricCanvas.freeDrawingBrush.color = "#ffffff";
      fabricCanvas.freeDrawingBrush.width = brushSize * 2;
    }
  }, [activeTool, activeColor, brushSize, fabricCanvas]);

  const handleToolClick = (tool: "draw" | "erase") => {
    setActiveTool(tool);
  };

  const handleClear = () => {
    if (!fabricCanvas) return;
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = "#ffffff";
    fabricCanvas.renderAll();
  };

  const handleBrushSizeChange = (size: number) => {
    setBrushSize(size);
    if (fabricCanvas?.freeDrawingBrush) {
      if (activeTool === "draw") {
        fabricCanvas.freeDrawingBrush.width = size;
      } else {
        fabricCanvas.freeDrawingBrush.width = size * 2;
      }
    }
  };

  return (
    <div className="h-full font-JB bg-gradient-to-br from-purple-50
     via-blue-50 to-indigo-50 p-4">
      <div className="max-w-5xl mx-auto">
        <Toaster position="top-right" />
        <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-60  flex-shrink-0">
              <ToolBar 
                activeTool={activeTool} 
                onToolClick={handleToolClick} 
                onClear={handleClear}
                brushSize={brushSize}
                onBrushSizeChange={handleBrushSizeChange}/>
              <div className="mt-3">
                <ColorPicker color={activeColor} onChange={setActiveColor} />
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="bg-white rounded border border-gray-300 
              overflow-hidden md:w-[350px] lg:w-[700px] lg:block">
                <canvas 
                  ref={canvasRef} 
                  className="block w-[700px] h-[400px] max-w-full"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
`;

const ToolbarCode = `import React from "react";
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
      
      <div className="space-y-2">
        <button
          onClick={() => onToolClick("draw")}
          className={\`w-full flex items-center justify-center gap-2 h-12 px-4 rounded-lg border 
          \${activeTool === "draw" ? "bg-blue-500 text-white" : "bg-white 
          text-gray-700 border-gray-300 hover:bg-gray-100"}\`}>
          <FaBrush />
          Brush
        </button>
        
        <button
          onClick={() => onToolClick("erase")}
          className={\`w-full flex items-center justify-center gap-2 h-12 px-4 rounded-lg border 
          \${activeTool === "erase" ? "bg-blue-500 text-white" : "bg-white text-gray-700
          border-gray-300 hover:bg-gray-100"}\`}>
          <FaEraser />
          Eraser
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Brush Size</span>
          <span className="text-sm text-gray-500">{brushSize}px</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => onBrushSizeChange(Math.max(1, brushSize - 1))}
            disabled={brushSize <= 1}
            className="p-2 rounded-lg border bg-gray-200 hover:bg-gray-300 
            disabled:opacity-50">
            <FaMinus />
          </button>

          <input
            type="range"
            value={brushSize}
            onChange={(e) => onBrushSizeChange(parseInt(e.target.value))}
            min={1}
            max={20}
            step={1}
            className="flex-1"/>

          <button
            onClick={() => onBrushSizeChange(Math.min(20, brushSize + 1))}
            disabled={brushSize >= 20}
            className="p-2 rounded-lg border bg-gray-200 hover:bg-gray-3 disabled:opacity-50">
            <FaPlus />
          </button>
        </div>
      </div>

      <button
        onClick={onClear}
        className="w-full flex items-center justify-center gap-3 h-12 px-2
        rounded-lg bg-red-500 text-white hover:bg-red-600">
        <FaUndo />
        Clear Canvas
      </button>
    </div>
  );
};
`;

const ColorpickerCode = `import { useState } from "react";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  const [customColor, setCustomColor] = useState<string>(color);

  const predefinedColors: string[] = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#FFC0CB",
    "#A52A2A",
    "#808080",
    "#FFE4E1",
    "#98FB98",
    "#87CEEB",
    "#DDA0DD",
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
    <div className="bg-gray-50 rounded-xl p-4 border 
    border-gray-200 sm:p-3 sm:rounded-lg sm:max-w-xs sm:mx-auto">
      <h3 className="font-semibold text-gray-800 text-center mb-4 sm:text-base -ml-6">🎨 Colors</h3>
      <div className="mb-4 text-center">
        <div 
          className="w-12 h-12 rounded-full border-4 border-white shadow-lg mx-auto mb-2"
          style={{ backgroundColor: color }}/>
        <span className="text-sm text-gray-600">Current Color</span>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4 sm:gap-1 justify-items-center">
        {predefinedColors.map((predefinedColor) => (
          <button
            key={predefinedColor}
            onClick={() => handleColorClick(predefinedColor)}
            className={\`w-12 h-12 sm:w-9 sm:h-9 rounded-lg border-2 transition-all hover:scale-110 
            \${color === predefinedColor ? "border-gray-800 shadow-lg" : "border-gray-300 
            hover:border-gray-500"}\`}
            style={{ backgroundColor: predefinedColor }}/>
        ))}
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 ml-2">Custom Color</label>
        <div className="flex justify-evenly gap-2 mt-1">
          <input
            type="color"
            value={customColor}
            onChange={handleCustomColorChange}
            className="w-12 h-10 rounded-md border border-gray-300 p-1"/>
          <input
            type="text"
            value={customColor}
            onChange={handleCustomColorChange}
            placeholder="#FFFFFF"
            className="h-10 text-sm border border-gray-300 rounded-md px-2 w-[120px]"/>
        </div>
      </div>
    </div>
  );
};
`;

  return (
    <div className="w-auto sm:mt-35 mt-33 sm:ml-32 ml-8 sm:mr-25 mr-8 relative">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-3 mono-text">Paint Board</h1>

      {/* Subheading */}
      <p className="sm:text-md text-sm text-gray-600 mb-4 mono-text text-justify">
        An interactive canvas where users can draw, express, and bring their ideas to life with every stroke.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap sm:gap-2 gap-3 -ml-2 mb-6 font-JB">
        {['Paint', 'Canvas', 'Create'].map((tag, index) => (
          <div key={tag} className={`relative sm:ml-0 ml-1 rounded-full p-[2px] tag-wrapper tag-${index}`}>
            <div className="relative z-10 bg-black text-white text-sm sm:px-4 px-3 py-1 rounded-full font-medium">
              {tag}
            </div>
          </div>
        ))}
      </div>


      {/* Toggle Buttons */}
      <div className="flex gap-4 sm:mt-20 mt-15">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2 px-5 py-2 rounded-md shadow-sm ${
            activeTab === 'preview'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span className="font-medium">Preview</span>
        </button>

        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-2 px-5 py-2 rounded-md ${
            activeTab === 'code'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span className="font-medium">Code</span>
        </button>
      </div>

      {/* Content Switcher */}
      <div className="sm:mt-10 rounded-md mt-5 min-h-[400px] md:-ml-10 ml-0 -mb-25 sm:mb-0 relative">
        {activeTab === 'preview' ? (
          <div className="relative rounded-md mb-40 sm:ml-10 sm:mr-3 sm:mb-0 overflow-hidden sm:h-auto h-auto bg-gradient-to-b from-black via-gray-900 to-black">
            <PaintBoard></PaintBoard>
          </div>
        ) : (
         <div className="sm:h-[500px] h-[300px] rounded-xl sm:ml-10 sm:mr-3 overflow-y-auto font-JB border border-gray-200 overflow-hidden">
          <CodeBlock
            code={codeString} 
            fileName="PaintBoard.tsx" 
            language="typescript"
          />
        </div>

        )}
      </div>

    <div className="sm:px-32 sm:pt-10 pb-10 font-JB">
      <h2 className="text-3xl font-bold mb-6 sm:ml-1 sm:mt-25 mt-15">Installation</h2>

      {/* Tabs */}
      <div className="flex items-center border-b border-gray-300 mb-6 text-sm">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Install Dependencies</h3>
      </div>

      {/* Install Dependencies */}
      <ScriptCopyBtn
        commandMap={{
          npm: "npm install fabric sonner lucide-react react-icons",
          yarn: "yarn add fabric sonner lucide-react react-icons",
          pnpm: "pnpm add fabric sonner lucide-react react-icons",
          bun: "bun add fabric sonner lucide-react react-icons",
        }}
      />
      <div className="flex items-center border-b border-gray-300 mb-6 text-sm">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Add into your project</h3>
      </div>
          <div className="sm:h-[500px] h-[300px] overflow-y-auto font-JB rounded-xl border border-gray-200 overflow-hidden">
            <CodeBlock
              language="typescript"
              fileName="src/ToolBar.tsx"
              code={ToolbarCode}
            />
          </div>
          <div className="sm:h-[500px] h-[300px] mt-8 mb-12 overflow-y-auto font-JB overflow-hidden rounded-xl border border-gray-200">
            <CodeBlock
              language="typescript"
              fileName="src/ColorPicker.tsx"
              code={ColorpickerCode}
            />
          </div>

      {/* Add util file */}
      <div className="relative -mb-15">
        <h3 className="text-base sm:font-semibold font-bold mb-2 sm:ml-2">Update App file</h3>
        <p className="text-sm text-muted-foreground mb-2 sm:ml-2">App.jsx</p>
         <ScriptImport command="<PaintBoard/>" />
      </div>
    </div>
    </div>
  );
};

export default Spotlight;
