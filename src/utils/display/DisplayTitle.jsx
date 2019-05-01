export const displayTitle = title => {
    if (title.slice(title.length - 8, title.length) === " - Topic") {
        return title.slice(0, title.length - 8);
    }
    return title;
};
