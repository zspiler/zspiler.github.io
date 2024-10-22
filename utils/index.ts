export function removeExtension(path: string): string {
    return path.replace(/\.[^.]+$/, '')
}

export function extractExtension(path: string): string {
    return path.match(/\.[^.]+$/)?.[0] ?? ''
}

export function getResizedImageFilename(fileName: string, size: number): string {
    const extension = extractExtension(fileName)
    return `${removeExtension(fileName)}-${size}${extension}`
}