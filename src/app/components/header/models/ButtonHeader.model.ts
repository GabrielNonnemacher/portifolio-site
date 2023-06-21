export interface ButtonHeader {
    id: number;
    title: string;
    content: string;
    selected: boolean;
}

export class ButtonHeaderDTO {
    static mapperListView = (params: ButtonHeader): ButtonHeader => {
        return {
            id: params.id,
            title: params.title,
            content: params.content,
            selected: params.selected
        } as ButtonHeader;
    }
}
