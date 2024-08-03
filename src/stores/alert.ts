import { SubjectType } from "@/types/subject";
import { create } from "zustand";

interface AlertData {
  subject: SubjectType | undefined;
  message: string;
}

interface Alert {
  type: "register" | "remove" | "none" | "normal" | "duplicate";
  data: AlertData | undefined;
  setMessage: (
    type: "register" | "remove" | "none" | "normal" | "duplicate",
    data: AlertData | undefined
  ) => void;
  reset: () => void;
}

const useAlert = create<Alert>((set) => ({
  type: "normal",
  data: undefined,
  setMessage: (type, data) => set({ type, data }),
    reset: () => set({ type: "normal", data: undefined }),
}));

export default useAlert;
