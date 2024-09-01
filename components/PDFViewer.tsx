"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PDFViewerProps {
  file: File | null;
}

const PDFViewer = ({ file }: PDFViewerProps) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // Create a URL for the file object
  const fileUrl = file ? URL.createObjectURL(file) : "";

  return (
    <div className="h-screen w-screen">
      {fileUrl && (
        <Worker workerUrl="/build/pdf.worker.min.js">
          <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      )}
    </div>
  );
};

export default PDFViewer;
