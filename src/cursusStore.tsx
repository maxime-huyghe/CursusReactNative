import create from "zustand"

export type Module = {
  sigle: string
  categorie: string
  parcours: string
  credits: number
}

export type Store = {
  modules: Module[]
  addModule: (m: Module) => void
  deleteModule: (s: string) => void
}

const defaultModules = [
  {
    sigle: "GL02",
    categorie: "CS",
    parcours: "TCBR",
    credits: 6,
  },
  {
    sigle: "LO02",
    categorie: "CM",
    parcours: "TCBR",
    credits: 6,
  },
  {
    sigle: "ST09",
    categorie: "ST",
    parcours: "TCBR",
    credits: 30,
  },
]

export const useCursusStore = create<Store>(set => ({
  modules: [...defaultModules],
  addModule: (module: Module) =>
    set(state => ({
      modules: [...state.modules, module],
    })),
  deleteModule: (sigle: string) =>
    set(state => ({
      modules: state.modules.filter(m => m.sigle !== sigle),
    })),
}))
