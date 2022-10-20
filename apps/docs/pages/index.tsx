import { Button } from "ui";

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <p>{process.env.BASEURL}</p>
      <Button />
    </div>
  );
}
