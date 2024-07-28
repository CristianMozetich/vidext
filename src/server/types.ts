import { TLAsset, TLShape } from "tldraw";
export interface TldrawDataBase {
  data: {
    id: string;
    records: TLShape[];
    assets: TLAsset[];
  };
}
