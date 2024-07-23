"use client";
import { Tldraw } from "tldraw";
import { trpc } from "../../app/_trpc/client";
import { useState } from "react";
import "tldraw/tldraw.css";

export default function TldrawDashboard() {
  const [editor, setEditor] = useState<any>(null);
  const [savedData, setSavedData] = useState<any>(null);

  const { mutate: saveDocument } = trpc.saveTldraw.useMutation({
    onSuccess: (data) => {
      alert("Documento guardado exitosamente.");
      setSavedData(data); // Actualiza el estado con los datos guardados
      console.log("Datos guardados:", data); // Muestra los datos guardados en consola
    },
    onError: (error) => {
      console.error("Error al guardar el documento:", error);
    }
  });

  const handleSave = () => {
    if (editor) {
      // Obtén el estado del editor
      const shapes = editor.getCurrentPageShapesSorted(); // Obtén las formas de la página actual
      const selectedShapeIds = editor.getSelectedShapeIds(); // Obtén los IDs de las formas seleccionadas

      console.log('Shapes en la página actual:', shapes); // Muestra las formas en la consola
      console.log('IDs de las formas seleccionadas:', selectedShapeIds); // Muestra los IDs seleccionados en la consola

      // Prepara los datos para enviar al backend
      const dataToSave = {
        shapes,
        selectedShapeIds
      };

      // Llama a la mutación para guardar los datos
      saveDocument({ id: 'id', data: dataToSave });
    } else {
      console.log("Editor aún no está montado.");
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "70%",
        height: "100%",
      }}
    >
      <Tldraw
        onMount={(editorInstance) => {
          console.log("Editor montado:", editorInstance);
          setEditor(editorInstance); // Guarda la instancia del editor en el estado
        }}
      />
      <button
        onClick={handleSave} 
        className="mt-4 p-2 z-10 fixed top-20 bg-blue-500 text-white"
      >
        Guardar
      </button>
      {/* Muestra los datos guardados */}
      {savedData && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
          <h2 className="text-lg font-bold">Datos Guardados:</h2>
          <pre>{JSON.stringify(savedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

