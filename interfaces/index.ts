export interface Project {
  id: number
  attributes: {
    image: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    name: string
    provider: string
    repoURL: string
    siteURL: string
  }
}

export interface ProjectState {
  projects: Project[]
  errorMsg: string
}

export interface Skill {
  id: number
  attributes: {
    name: string
    level: string
  }
}

export interface SkillState {
  skills: Skill[]
  errorMsg: string
}

export interface IProject {
  _id: string
  name: string
  provider: 'github' | 'gitlab'
  repoURL: string
  siteURL: string
  image: IImage
}

export interface IImage {
  asset: {
    _ref: string
  }
}

export interface ISkill {
  _id: string
  name: string
  level: string
}

export interface IResume {
  url: string
}
