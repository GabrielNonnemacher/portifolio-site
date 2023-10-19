export interface Project {
    name: string;
    text: string;
    image: string;
    progress: string;
    link: string;
    color: string;
}

export class ProjectDTO {
    static mapperDto = (params: Project): Project => {
        return {
            name: params.name,
            text: params.text,
            image: params.image,
            progress: params.progress,
            link: params.link,
            color: params.color
        } as Project;
    }
}