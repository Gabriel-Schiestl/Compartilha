import { create } from "zustand";

enum Roles {
    ADMIN = "admin",
    USER = "user",
}

interface Aula {
  url: string,
  title: string,
  description: string,
  extraMaterials: string[]
}

interface Questions {
  content: string
}

interface Questionario {
  id: number;
  question: string,
  options: Questions[]
}

interface Lesson {
  id: number;
  title: string;
  type: Aula | Questionario,
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
        type: {
          url: 'exemplo.com',
          title: "Aula 1",
          description: "Teste",
          extraMaterials: ['Teste', "Testando"]
        },
      }]
    }]
  }],
  addTraining: (training) => set((state) => ({ trainings: [...state.trainings, training] })),
  removeTraining: (id) => set((state) => ({ trainings: state.trainings.filter((t) => t.id !== id) })),
}));