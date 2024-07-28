// HOOK TLDRAW - INDEXEDDB
import { useState, useEffect } from "react";
import { Editor, TLShape, TLAsset } from "tldraw";
import { trpc } from "../app/_trpc/client";
import { TldrawDataBase } from "@/server/types";

export const useTldraw = () => {
  const randomId = self.crypto.randomUUID();
  const { data, refetch, isLoading, error } = trpc.getTldraw.useQuery();

  const [editor, setEditor] = useState<Editor | null>(null);
  const [shapes, setShapes] = useState<TLShape[]>([]);
  const [assets, setAssets] = useState<TLAsset[]>([]);
  const [DATABASE, setDATABASE] = useState<TldrawDataBase[] | {}>([]);

  const request = indexedDB.open("TLDRAW_DOCUMENT_v2tldraw_document_v3", 4);

  request.onupgradeneeded = (event) => {
    const db = (event.target as IDBRequest).result;

    const create_assets_store = db.createObjectStore("assets");
    const create_records_store = db.createObjectStore("records");
  };

  request.onsuccess = (event) => {
    const db = (event.target as IDBRequest).result;
    const transaction_records = db.transaction(["records"], "readwrite");
    const object_store_records = transaction_records.objectStore("records");
  };
  useEffect(() => {
    const request = indexedDB.open("TLDRAW_DOCUMENT_v2tldraw_document_v3", 4);

    request.onsuccess = (event) => {
      if (event.target) {
        const db = (event.target as IDBRequest).result;
        const transactionRecords = db.transaction(["records"], "readwrite");
        const objectStoreRecords = transactionRecords.objectStore("records");

        const getAllRecordsRequest = objectStoreRecords.getAll();

        getAllRecordsRequest.onsuccess = () => {
          const result = getAllRecordsRequest.result;

          const filtered_shapes_records = result.filter((record: TLShape) =>
            record.id.startsWith("shape:")
          );

          const filtered_assets_records = result.filter((result: TLAsset) =>
            result.id.startsWith("asset:")
          );

          if (editor) {
            if (filtered_assets_records) {
              editor.createAssets(filtered_assets_records);
            }

            if (filtered_shapes_records) {
              editor.createShapes(filtered_shapes_records);
            }
          }
        };
      }
    };
  }, [editor]);

  const updateTldrawMutation = trpc.updateTldraw.useMutation({
    onSettled: () => {
      refetch();
    },
    onError: (error) => {
      console.error("Error updating shape:", error);
    },
  });

  useEffect(() => {
    if (data) {
      setDATABASE(data);
    }
  }, [data]);

  const handleShare = () => {
    if (editor) {
      const newShape = editor.getCurrentPageShapesSorted();
      const newAssets = editor.getAssets();
      setShapes(newShape);
      setAssets(newAssets);
      updateTldrawMutation.mutate({
        data: { id: randomId, records: newShape, assets: newAssets },
      });
    } 
  };

  const handleUpdate = () => {
    if (editor) {
      const shapes = editor.getCurrentPageShapesSorted();

      const editor_assets = editor.getAssets();

      const request = indexedDB.open("TLDRAW_DOCUMENT_v2tldraw_document_v3", 4);

      request.onsuccess = (event) => {
        const db = (event.target as IDBRequest).result;

        const transactionAssets = db.transaction(["assets"], "readwrite");
        const objectStoreAssets = transactionAssets.objectStore("assets");

        const transactionRecords = db.transaction(["records"], "readwrite");
        const objectStoreRecords = transactionRecords.objectStore("records");

        if (editor_assets) {
          editor_assets.forEach((item: TLAsset) => {
            objectStoreAssets.put(item, item.id);
            objectStoreRecords.put(item, item.id);
          });
        }

        if (shapes.length > 0) {
          shapes.forEach((shape: TLShape) => {
            objectStoreRecords.put(shape, shape.id);
          });
        } else {
          objectStoreRecords.clear();
        }
      };
    }
  };

  return {
    editor,
    setEditor,
    shapes,
    handleShare,
    handleUpdate,
    isLoading,
    error,
  };
};
