export const isRetina = (first:string, second:string) => {
    if (window.devicePixelRatio >= 2) {
        return second
    }
    return first;
};