export const checkExpired = (data) => {
    if (!data || (data.msg && data.msg === 'Token has expired')) {
        return true;
    }
    return false;
}