# ENV Bug
`apps/docs/pages`

```
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
```

- `yarn dev`: The app runs smoothly and the env variable is shown like it should
- `yarn lint`: `Error: $BASEURL is not listed as a dependency in turbo.json  turbo/no-undeclared-env-vars`
