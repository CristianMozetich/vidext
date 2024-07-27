import React from "react";
import { Button } from "../ui/button";

const SubmitButton: React.FC = () => (
  <Button className="bg-hov text-slate-200 hover:text-slate-200 hover:bg-butt" type="submit" variant="outline">
    Submit
  </Button>
);

export default SubmitButton;
