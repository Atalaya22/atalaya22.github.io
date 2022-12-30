export enum ProjectName {
  FLAMEDRAMON = 'flamedramon',
  WARGREYMON = 'wargreymon',
  METALGARURUMON = 'metalgarurumon',
  CLONETROOPER = 'clonetrooper',
  DESCEND_THROUGH_CARCERUM = 'descend-through-carcerum',
  DRAG_THEM_OUT_INTO_SPACE = 'drag-them-out-into-space',
  FFVII_SWORD = 'ffvii-sword',
  HAND_DRAWN = 'hand-drawn',
  LAST_TRAVEL = 'last-travel',
  OVERWATCH = 'overwatch',
  SPIDERMAN = 'spiderman',
  VOXEL_LEGO = 'voxel-lego',
  ZELDA_LINK = 'zelda-link',
  CYBERPUNK = 'cyberpunk',
  DIGIMON = 'digimon',
  ENDLESS_DUNGEON = 'endless-dungeon',
  KH = 'kh',
  SELFPORTRAIT = 'selfportrait',
  THRESH = 'thresh',
  ZELDA_ROOM = 'zelda-room',
  DARK_DESCENDANT = 'dark-descendant',
  DRAGONBALL = 'dragonball',
  EVANGELION = 'evangelion',
  GOT_DRAGON = 'got-dragon',
  KIKYO = 'kikyo',
  NARUTO = 'naruto',
  SMOKEFIGHTER = 'smokefighter',
  UNITY_LIGHTS = 'unity-lights',
  YU_GI_OH = 'yu-gi-oh',
}

export class SketchfabInfo {
  constructor(
    public title: string,
    /** (!) Remember to add the `/embed?autostart=1` at the end */
    public src: string
  ) {}
}

export class YoutubeVideoInfo {
  constructor(
    public title: string,
    /** (!) Remember to add the `?autoplay=1` at the end */
    public src: string
  ) {}
}

export interface ProjectDetails {
  id: ProjectName;
  displayName: string;
  nImages: number;
  videoInfo?: YoutubeVideoInfo;
  sketchfabInfo?: SketchfabInfo;
  tags?: ProjectTag[];
}

export enum ProjectTag {
  THREE_D = '3d',
  ANIMATION = 'Animation',
  ARCHITECTURE = 'Architecture',
  ART = 'Art',
  DESIGN = 'Design',
  DEVELOPMENT = 'Development',
  GAMES = 'Games',
  GRAPHICS = 'Graphics',
  ILLUSTRATION = 'Illustration',
  MULTIMEDIA = 'Multimedia',
  PHOTOGRAPHY = 'Photography',
  VIDEO = 'Video',
  WEB_DESIGN = 'Web Design',
  WRITING = 'Writing',
  AUDIO = 'Audio',
  BUSINESS = 'Business',
  EDUCATION = 'Education',
  HEALTHCARE = 'Healthcare',
  MARKETING = 'Marketing',
  SCIENCE = 'Science',
  TECHNOLOGY = 'Technology',
}

export const PROJECT_DETAILS: Record<ProjectName, ProjectDetails> = {
  [ProjectName.FLAMEDRAMON]: {
    id: ProjectName.FLAMEDRAMON,
    displayName: 'Flamedramon',
    nImages: 3,
    tags: [ProjectTag.THREE_D, ProjectTag.ANIMATION]
  },
  [ProjectName.WARGREYMON]: {
    id: ProjectName.WARGREYMON,
    displayName: 'Wargreymon',
    nImages: 4,
    tags: [ProjectTag.THREE_D]
  },
  [ProjectName.METALGARURUMON]: {
    id: ProjectName.METALGARURUMON,
    displayName: 'MetalGarurumon',
    nImages: 5,
  },
  [ProjectName.CLONETROOPER]: {
    id: ProjectName.CLONETROOPER,
    displayName: 'Clone Trooper',
    nImages: 8,
  },
  [ProjectName.DESCEND_THROUGH_CARCERUM]: {
    id: ProjectName.DESCEND_THROUGH_CARCERUM,
    displayName: 'Descend Through Carcerum',
    nImages: 8,
    videoInfo: new YoutubeVideoInfo(
      'Descend through Carcerum Teaser Trailer',
      'https://www.youtube.com/embed/I9Gw-kn_eSE?autoplay=1'
    ),
  },
  [ProjectName.DRAG_THEM_OUT_INTO_SPACE]: {
    id: ProjectName.DRAG_THEM_OUT_INTO_SPACE,
    displayName: 'Drag Them Out Into Space',
    nImages: 6,
  },
  [ProjectName.FFVII_SWORD]: {
    id: ProjectName.FFVII_SWORD,
    displayName: 'Final Fantasy VII Sword',
    nImages: 2,
    sketchfabInfo: new SketchfabInfo(
      'Cloud Sword FFVII',
      'https://sketchfab.com/models/ccd4423cfd1c46beb54aa3436b193a0c/embed?autostart=1'
    ),
  },
  [ProjectName.HAND_DRAWN]: {
    id: ProjectName.HAND_DRAWN,
    displayName: 'Hand Drawings',
    nImages: 4,
  },
  [ProjectName.LAST_TRAVEL]: {
    id: ProjectName.LAST_TRAVEL,
    displayName: 'Last Travel',
    nImages: 5,
  },
  [ProjectName.OVERWATCH]: {
    id: ProjectName.OVERWATCH,
    displayName: 'Overwatch',
    nImages: 2,
  },
  [ProjectName.SPIDERMAN]: {
    id: ProjectName.SPIDERMAN,
    displayName: 'Spiderman drawings',
    nImages: 3,
  },
  [ProjectName.VOXEL_LEGO]: {
    id: ProjectName.VOXEL_LEGO,
    displayName: 'Voxel LEGO',
    nImages: 4,
  },
  [ProjectName.ZELDA_LINK]: {
    id: ProjectName.ZELDA_LINK,
    displayName: 'Zelda Link',
    nImages: 1,
  },
  [ProjectName.CYBERPUNK]: {
    id: ProjectName.CYBERPUNK,
    displayName: 'Cyberpunk Drawing',
    nImages: 1,
  },
  [ProjectName.DIGIMON]: {
    id: ProjectName.DIGIMON,
    displayName: 'Digimon Drawing',
    nImages: 1,
  },
  [ProjectName.ENDLESS_DUNGEON]: {
    id: ProjectName.ENDLESS_DUNGEON,
    displayName: 'Endless Dungeon',
    nImages: 4,
  },
  [ProjectName.KH]: {
    id: ProjectName.KH,
    displayName: 'Kingdom Hearts Drawing',
    nImages: 1,
  },
  [ProjectName.SELFPORTRAIT]: {
    id: ProjectName.SELFPORTRAIT,
    displayName: 'Self Portrait',
    nImages: 2,
  },
  [ProjectName.THRESH]: {
    id: ProjectName.THRESH,
    displayName: 'Thresh and Nasus Drawing',
    nImages: 1,
  },
  [ProjectName.ZELDA_ROOM]: {
    id: ProjectName.ZELDA_ROOM,
    displayName: 'Zelda Room Recreation',
    nImages: 3,
  },
  [ProjectName.DARK_DESCENDANT]: {
    id: ProjectName.DARK_DESCENDANT,
    displayName: 'Dark Descendant',
    nImages: 6,
  },
  [ProjectName.DRAGONBALL]: {
    id: ProjectName.DRAGONBALL,
    displayName: 'Dragonball Drawing',
    nImages: 1,
  },
  [ProjectName.EVANGELION]: {
    id: ProjectName.EVANGELION,
    displayName: 'Evangelion Drawing',
    nImages: 2,
  },
  [ProjectName.GOT_DRAGON]: {
    id: ProjectName.GOT_DRAGON,
    displayName: 'Game of Thrones Low Poly Dragon',
    nImages: 2,
  },
  [ProjectName.KIKYO]: {
    id: ProjectName.KIKYO,
    displayName: 'Kikyo Fan Art',
    nImages: 1,
  },
  [ProjectName.NARUTO]: {
    id: ProjectName.NARUTO,
    displayName: 'Naruto Fan Art',
    nImages: 1,
  },
  [ProjectName.SMOKEFIGHTER]: {
    id: ProjectName.SMOKEFIGHTER,
    displayName: 'Smokefighter',
    nImages: 4,
  },
  [ProjectName.UNITY_LIGHTS]: {
    id: ProjectName.UNITY_LIGHTS,
    displayName: 'Unity Lights Scene',
    nImages: 2,
  },
  [ProjectName.YU_GI_OH]: {
    id: ProjectName.YU_GI_OH,
    displayName: 'Yu-Gi-Oh Wall Painting',
    nImages: 2,
  },
};

const PROJECTS_TO_DISPLAY: ProjectName[] = Object.keys(PROJECT_DETAILS).map(v => v as ProjectName);

export const PROJECTS_TO_DISPLAY_INFO: ProjectDetails[] = PROJECTS_TO_DISPLAY.map(
  projectName => PROJECT_DETAILS[projectName]
);
