export interface Certificate {
    path: string;
    name: string;
    info: string;
}

export class CertificateDTO {
    static mapperListView = (params: Certificate): Certificate => {
        return {
            path: params.path,
            name: params.name,
            info: params.info
        } as Certificate;
    }
}
