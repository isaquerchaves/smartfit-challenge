export function statusUnit(opened: boolean): string {
    const status = opened ? "Aberto" : "Fechado";
    return status;
}

export function clearString(info: string): string | undefined {
    if (info) {
        return info.replace('<p>', '')
            .replace('</p>', '')
            .replace('<br>', '')
            .replace('&#8211', '')
            .replace('<p>', '')
            .replace('<span>', '')
            .replace('<strong>', '')
            .replace('</strong>', '')
            .replace('</span>', '')
            .replace('</p>', '')
            .replace('\n', '');
    }
    return undefined;
}