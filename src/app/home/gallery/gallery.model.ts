export enum ProjectName {
  FLAMEDRAMON = 'flamedramon',
  WARGREYMON = 'wargreymon',
  METALGARURUMON = 'metalgarurumon',
  CLONETROOPER = 'clonetrooper',
}

export interface ProjectDetails {
  id: ProjectName;
  displayName: string;
  coverImageSrc: string;
  // publishDate: Date;
  // description: string;
  // toolsUsed?: Tool[];
}

export const PROJECT_DETAILS: Record<ProjectName, ProjectDetails> = {
  [ProjectName.FLAMEDRAMON]: {
    id: ProjectName.FLAMEDRAMON,
    displayName: 'Flamedramon',
    coverImageSrc: buildCoverImageSrc(ProjectName.FLAMEDRAMON),
  },
  [ProjectName.WARGREYMON]: {
    id: ProjectName.WARGREYMON,
    displayName: 'Wargreymon',
    coverImageSrc: buildCoverImageSrc(ProjectName.WARGREYMON),
  },
  [ProjectName.METALGARURUMON]: {
    id: ProjectName.METALGARURUMON,
    displayName: 'MetalGarurumon',
    coverImageSrc: buildCoverImageSrc(ProjectName.METALGARURUMON),
  },
  [ProjectName.CLONETROOPER]: {
    id: ProjectName.CLONETROOPER,
    displayName: 'Clone Trooper',
    coverImageSrc: buildCoverImageSrc(ProjectName.CLONETROOPER),
  },
};

function buildCoverImageSrc(projectName: ProjectName): string {
  return `assets/images/projects/${projectName}/${projectName}.jpg`;
}

const PROJECTS_TO_DISPLAY: ProjectName[] = [
  ProjectName.FLAMEDRAMON,
  ProjectName.WARGREYMON,
  ProjectName.METALGARURUMON,
  ProjectName.CLONETROOPER,
];

export const PROJECTS_TO_DISPLAY_INFO: ProjectDetails[] = PROJECTS_TO_DISPLAY.map(
  projectName => PROJECT_DETAILS[projectName]
);
