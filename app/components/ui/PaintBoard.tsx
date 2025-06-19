import { useEffect, useRef, useState } from "react";
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className="h-full font-JB bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-4">
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
                onBrushSizeChange={handleBrushSizeChange}
              />
              <div className="mt-3">
                <ColorPicker color={activeColor} onChange={setActiveColor} />
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="bg-white rounded border border-gray-300 overflow-hidden md:w-[350px] lg:w-[700px] lg:block">
                <canvas 
                  ref={canvasRef} 
                  className="block w-[700px] h-[400px] max-w-full" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
