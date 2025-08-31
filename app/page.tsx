import { Button } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="destructive" size="xl" className="rounded-full text-custom-color">
        <MousePointerClick />
        Click me
      </Button>
    </div>
  );
}
