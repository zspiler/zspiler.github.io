import { promises as fs } from 'fs';
import path from 'path';

export default defineEventHandler(async (event) => {
    const album = getRouterParam(event, 'album')

    const dir = path.join(process.cwd(), `public/images/${album}`);
    const files = await fs.readdir(dir);
    const images = files.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));
    return images;
});