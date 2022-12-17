export enum ProjectName {
  FLAMEDRAMON = 'Flamedramon',
  WARGREYMON = 'Wargreymon',
  METALGARURUMON = 'MetalGarurumon',
  CLONEKIM = 'CloneKim',
}

export interface ProjectDetails {
  displayName: string;
  coverImageSrc: string;
  // publishDate: Date;
  // description: string;
  // toolsUsed?: Tool[];
}

export const PROJECT_DETAILS: Record<ProjectName, ProjectDetails> = {
  [ProjectName.FLAMEDRAMON]: {
    displayName: 'Flamedramon',
    coverImageSrc: buildCoverImageSrc(ProjectName.FLAMEDRAMON),
  },
  [ProjectName.WARGREYMON]: {
    displayName: 'Wargreymon',
    coverImageSrc: buildCoverImageSrc(ProjectName.WARGREYMON),
  },
  [ProjectName.METALGARURUMON]: {
    displayName: 'MetalGarurumon',
    coverImageSrc: buildCoverImageSrc(ProjectName.METALGARURUMON),
  },
  [ProjectName.CLONEKIM]: {
    displayName: 'Clone Trooper',
    coverImageSrc: buildCoverImageSrc(ProjectName.CLONEKIM),
  },
};

function buildCoverImageSrc(projectName: ProjectName): string {
  return `assets/images/projects/${projectName}/${projectName}.jpg`;
}

const PROJECTS_TO_DISPLAY: ProjectName[] = [
  ProjectName.FLAMEDRAMON,
  ProjectName.WARGREYMON,
  ProjectName.METALGARURUMON,
  ProjectName.CLONEKIM,
];

export const PROJECTS_TO_DISPLAY_INFO: ProjectDetails[] = PROJECTS_TO_DISPLAY.map(
  projectName => PROJECT_DETAILS[projectName]
);
