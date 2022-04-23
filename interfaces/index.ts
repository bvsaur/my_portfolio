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
