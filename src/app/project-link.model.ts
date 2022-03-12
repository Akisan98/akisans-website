export interface ProjectLink {
    github?: string,
    gitlab?: string,
    googlePlay?: string,
    figma?: string,
    external?: string,
    project?: string
}

export interface Project{
    title: string;
    platform: string;
    tools: string;
    image?: string;
    buttons: ProjectLink;
}
