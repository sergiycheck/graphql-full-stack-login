import { useState } from "react";
import { Dialog } from "../ui/dialogs/Dialog";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export function App() {
  const [showDialog, setShowDialog] = useState(false);

  function onClose() {
    setShowDialog(false);
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">Shared ui kit</h1>

      <div className="flex flex-col w-full items-center justify-center">
        <Button>simple button</Button>
        <Input placeholder="simple input" />

        <Button onClick={() => setShowDialog(true)}>Dialog</Button>

        <Dialog isVisible={showDialog} onClose={onClose}>
          <Dialog.Header
            headline="Reset Settings?"
            text="Use dialogs for prompts that block an app’s normal operation, and for critical information that requires a specific user task, decision, or acknowledgement."
          />
          <Dialog.Body className={"flex w-full flex-col"}>
            <p className="text-sm">dialog body</p>
          </Dialog.Body>
          <Dialog.Footer>
            <Button onClick={onClose}>Cancel</Button> <Button onClick={onClose}>Accept</Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    </>
  );
}
