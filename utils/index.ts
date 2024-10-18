export function removeExtension(path: string): string {
    return path.replace(/\.[^.]+$/, '')
}

export function extractExtension(path: string): string {
    return path.match(/\.[^.]+$/)?.[0] ?? ''
}

