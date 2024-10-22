import sharp from 'sharp'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';

// NOTE: NuxtImg does not work with nuxt generate / our case?

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(path.dirname(__filename), '..');

const inputDir = path.join(__dirname, 'public/images/original');
const outputDir = path.join(__dirname, 'public/images/resized');

const imageSizes = [420, 640, 1024, 1920];

function findAllImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            findAllImages(filePath, fileList);
        } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

const imageFiles = findAllImages(inputDir);

imageFiles.forEach(file => {
    const fileName = path.basename(file);
    const ext = path.extname(file);
    const nameWithoutExt = fileName.replace(ext, '');

    const relativeDir = path.dirname(file).replace(inputDir, '');
    const outputSubDir = path.join(outputDir, relativeDir);

    if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true });
    }

    imageSizes
        .filter(size => !fs.existsSync(path.join(outputSubDir, `${nameWithoutExt}-${size}${ext}`)))
        .forEach(size => {

            const outputFilePath = path.join(outputSubDir, `${nameWithoutExt}-${size}${ext}`);
            sharp(file)
                .resize(size)
                .rotate() // fixes rotation
                .toFile(outputFilePath, (err, info) => {
                    if (err) throw err;
                    console.log(`Generated: ${outputFilePath}`);
                });
        });
});