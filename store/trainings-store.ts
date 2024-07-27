import { create } from "zustand";

enum Roles {
    ADMIN = "admin",
    USER = "user",
}

interface TrainingProps {
    id: number,
    name: string,
    roles: Roles[],
    description: string,
    image?: string,
    required?: boolean
}

interface TrainingStore {
    trainings: TrainingProps[],
    addTraining: (training: TrainingProps) => void,
    removeTraining: (id: number) => void
}

export const useTrainingsStore = create<TrainingStore>((set) => ({
  trainings: [],
  addTraining: (training) => set((state) => ({ trainings: [...state.trainings, training] })),
  removeTraining: (id) => set((state) => ({ trainings: state.trainings.filter((t) => t.id !== id) })),
}));