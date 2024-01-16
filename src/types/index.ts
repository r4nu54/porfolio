export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  id: string;
  name: string;
  about: string;
}

export interface IExperience {
  name: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface IExperiences {
  id: string;
  title: string;
  details: IExperience[];
}

export interface IProject {
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
}
export interface IProjects {
  id: string;
  title: string;
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}

export interface ISocialBar {
  id: string;
  title: string;
}
