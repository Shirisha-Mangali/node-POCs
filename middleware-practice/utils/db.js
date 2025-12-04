import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, '..', 'db.json');

export async function readDB() {
    const raw = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(raw);
}

export async function writeDB(data) {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export function generateID(prefix = '') {
    return prefix + nanoid(8);
}
