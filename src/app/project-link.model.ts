export interface ProjectLink {
    github?: string,
    googlePlay?: string,
    figma?: string,
    external?: string,
    project?: string
}

export interface ProjectView {
    title: String;
    platform: String;
    tools: String;
    buttons: ProjectLink;
}
