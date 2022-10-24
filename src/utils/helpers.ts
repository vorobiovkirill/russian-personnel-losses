export const gethDate = (createdAt: Date | string): string => {
    const date = new Date(createdAt);

    const currentDate = new Intl.DateTimeFormat('en', {
        month: 'long',
        day: 'numeric'
    }).format(date);

    return currentDate;
};