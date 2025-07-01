import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="space-y-3 mx-auto p-5">
      <Button variant="elevated">oke</Button>
      <Input />
      <Checkbox />
      <Progress value={50} />
      <Textarea />
    </div>
  );
}
