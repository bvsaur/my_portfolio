import React from 'react'

const ProjectSkeleton = () => {
  return (
    <div className="h-56 w-full rounded-2xl shadow-lg">
      <div className="relative flex h-full animate-pulse flex-col items-center justify-center">
        <div className="absolute right-4 top-4 h-8 w-8 bg-slate-200 "></div>
        <div className="h-6 w-3/4 rounded-full bg-slate-200"></div>
        <div className="mt-2 h-6 w-1/2 rounded-full bg-slate-200"></div>
      </div>
    </div>
  )
}

export default ProjectSkeleton
