const SkillSkeleton = () => {
  return (
    <div className="flex h-10 w-full animate-pulse items-center p-1">
      <div className="h-6 w-6 rounded-sm bg-slate-200"></div>
      <div className="ml-2 w-full text-left">
        <div className="h-3 w-full rounded-full bg-slate-200"></div>
        <div className="mt-2 h-3 w-1/2 rounded-full bg-slate-200"></div>
      </div>
    </div>
  )
}

export default SkillSkeleton
