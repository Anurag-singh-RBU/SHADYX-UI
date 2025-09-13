import { writeFile, mkdir } from "fs/promises";
import path from "path";
import fetch from "node-fetch";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __dirname = path.dirname(__filename);

export default async function installComponent(jsonUrl) {
  try {
    const res = await fetch(jsonUrl);
    if (!res.ok) {
      throw new Error(`HTTP error ! Status : ${res.status}`);
    }

    const data = await res.json();

    for (const file of data.files) {
      if (!file.path || !file.content) {

        throw new Error("Each file must have a 'path' and 'content'.");
        
      }

      const filePath = path.join(process.cwd(), "shadyx", "ui", file.path);
      await mkdir(path.dirname(filePath), { recursive: true });
      await writeFile(filePath, file.content, "utf8");
      console.log(`✅ Created shadyx/ui/${file.path}`);
    }

    console.log(`🎉 ${data.name} component installed successfully !!`);
  } catch (err) {
    console.error("❌ Failed installation : ", err.message);
  }
}
