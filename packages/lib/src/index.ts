
export interface PruneOptions {
  router: any;
  dir?: string;
  gitignore?: boolean;
}

export async function loadProcedures(router): Promise<string[]> {
  return []
}

export async function checkProcedureUsed(proc: string): Promise<boolean> {
  return false;
}

export async function prune(options: PruneOptions) {
  let { router, dir, gitignore } = options

  if (gitignore === undefined) {
    gitignore = true
  }

  console.log("Loading procedures...")
  const procs = await loadProcedures(router)
  console.log(`Proceeding to check ${procs.length} procedures...`)
  for (const proc of procs) {
    const used = await checkProcedureUsed(proc)
    if (!used) {
      continue
    }
    console.log(`[-] ${proc}`)
  }
}
