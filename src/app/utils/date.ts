export function formatTime(ms: number) {
    const minutes = Math.floor(ms / (60 * 1000));
    const seconds = ((ms % (60 * 1000)) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, '0')}`;
}