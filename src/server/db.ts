import { TldrawDataBase } from "./types";

// Tldraw
let tldraw: TldrawDataBase[] = [];

export const getTldraw = () => {

  return tldraw;
};

export const updateTldraw = (data: TldrawDataBase) => {

  tldraw.push(data);
  return data;
};