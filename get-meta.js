import { resolve } from "path";
(async function () {
  const filename = resolve(process.argv[2]);
  const mod = await import(`file://localhost${filename}`);
  const { id, displayName, author, description } = mod.default;
  console.log(JSON.stringify({ id, displayName, author, description }));
})();
