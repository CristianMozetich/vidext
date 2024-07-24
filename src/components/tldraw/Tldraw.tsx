"use client";
import { Tldraw } from "tldraw";
import { trpc } from "../../app/_trpc/client";
import { useState } from "react";
import { Button } from "../ui/button";
import "tldraw/tldraw.css";
import { Query } from "@tanstack/react-query";



export default function TldrawDashboard() {
  const [editor, setEditor] = useState<any>(null);
  const [savedData, setSavedData] = useState<any>(null);
  const [documentId, setDocumentId] = useState<[]>([]);

  // POST TRPC
  const { mutate: saveDocument } = trpc.createTldraw.useMutation({
    onSuccess: (data) => {
      setSavedData(data);
      console.log("Datos guardados:", data);

    },
    onError: (error) => {
      console.error("Error al guardar el documento:", error);
    },
  });


  // GET TRPC
  //const data = trpc.getTldraw.useQuery(documentId);


  // GET
  /*const handleLoad = () => {
    if (data) {
      console.log('Datos recuperados:', data);
      // Implementa lógica para cargar los datos en el editor si es necesario
    } else {
      console.log('No se encontraron datos para el ID proporcionado.');
    }
  };*/

  // POST
  const handleSave = () => {
    if (editor) {
      const shapes = editor.getCurrentPageShapesSorted(); // Obtén las formas de la página actual
      const selectedShapeIds = editor.getSelectedShapeIds(); // Obtén los IDs de las formas seleccionadas
      setDocumentId(selectedShapeIds);
      console.log("Shapes en la página actual:", shapes); // Muestra las formas en la consola
      console.log("IDs de las formas seleccionadas:", selectedShapeIds); // Muestra los IDs seleccionados en la consola


      const dataToSave = {
        shapes,
        selectedShapeIds,
      };


      saveDocument({ id: documentId, data: dataToSave });

    } else {
      console.log("No se pudo guardar el documento.");
    }
  };


  return (
    <div className="absolute inset-0 w-full lg:w-4/5 h-full lg:ml-auto">
    <Tldraw
      onMount={(editorInstance) => {
        console.log("Editor montado:", editorInstance);
        setEditor(editorInstance);
      }}
    />
    <Button
      onClick={handleSave}
      className="z-10 fixed top-14 m-2 bg-butt hover:bg-hov"
    >
      Guardar
    </Button>
    {/* datos guardados */}
    {savedData && (
      <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded flex flex-col items-center justify-center">
        <h2 className="text-lg font-bold">Datos Guardados:</h2>
        <pre>{JSON.stringify(savedData, null, 2)}</pre>
      </div>
    )}
  </div>
  );
}
