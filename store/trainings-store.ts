import { create } from "zustand";

enum Roles {
    ADMIN = "admin",
    USER = "user",
}

interface ExtraMaterials {
  placeholder: string,
  url: string
}

interface Aula {
  url: string,
  title: string,
  description: string,
  extraMaterials: ExtraMaterials[]
}


interface Questions {
  content: string
}

interface Questionario {
  id: number;
  title: string;
  question: string,
  options: Questions[]
}

interface Lesson {
  id: number;
  title: string;
  lesson?: Aula,
  questions?: Questionario
}

interface Modules {
  name: string,
  lessons: Lesson[],
}

interface TrainingProps {
    id: number,
    name: string,
    roles: Roles[],
    description: string,
    modules: Modules[],
    image?: string,
    required?: boolean
}

interface TrainingStore {
    trainings: TrainingProps[],
    addTraining: (training: TrainingProps) => void,
    removeTraining: (id: number) => void
}

export const useTrainingsStore = create<TrainingStore>((set) => ({
  trainings: [{
    id: 1,
    name: "Training 1",
    roles: [Roles.ADMIN],
    description: "This is training 1",
    modules: [{
      name: "Module 1",
      lessons: [{
        id: 1,
        title: "Lesson 1",
        lesson: {
          title: "Aula 1",
          description: "Aula 1 descricao",
          extraMaterials: [{
            placeholder: "Material 1",
            url: 'www.material1.com'
          },
          {
            placeholder: "Material 2",
            url: 'www.material2.com'
          }],
          url: 'teste.com'
        }
      }]
    }]
  }],
  addTraining: (training) => set((state) => ({ trainings: [...state.trainings, training] })),
  removeTraining: (id) => set((state) => ({ trainings: state.trainings.filter((t) => t.id !== id) })),
}));