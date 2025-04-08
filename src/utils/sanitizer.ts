export const removeAllWhitespace = (str: string): string => {
    if (typeof str !== 'string') {
        return str;
    }
    return str.replace(/\s+/g, '');
};