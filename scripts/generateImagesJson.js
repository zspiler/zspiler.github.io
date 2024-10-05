import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(path.dirname(__filename), '..');

async function generateImageList() {
    const baseDir = path.join(__dirname, 'public/images');

    const albums = fs.readdirSync(baseDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

    const fileName = 'imageList.json';

    const imageData = {};

    for (const album of albums) {
        const albumDir = path.join(baseDir, album);
        const files = await fs.promises.readdir(albumDir);
        const images = files.filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file));
        imageData[album] = images;
    }

    const outputDir = path.join(__dirname, '..', 'static', 'data');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(path.join(outputDir, fileName), JSON.stringify(imageData, null, 2));

    console.log(`Generated ${fileName}`);
}

generateImageList().catch(console.error);