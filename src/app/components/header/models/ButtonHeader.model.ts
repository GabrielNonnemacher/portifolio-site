export interface ButtonHeader {
    id: string;
    title: string;
}

export class ButtonHeaderDTO {
    static mapperListView = (params: ButtonHeader): ButtonHeader => {
        return {
            id: params.id,
            title: params.title
        } as ButtonHeader;
    }
}
