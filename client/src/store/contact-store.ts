import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const isClient = typeof window !== "undefined";

const sessionStorageAvailable = isClient
  ? createJSONStorage(() => sessionStorage)
  : undefined;

type ContactData = {
  name: string;
  phoneNumber: string;
  email: string;
  answers: string;
  appeal: string;
};

type ContactStoreType = {
  data: ContactData;
  checked: boolean;
  setData: <K extends keyof ContactData>(key: K, value: ContactData[K]) => void;
  setChecked: (value: boolean) => void;
  clearData: () => void;
};

export const useContactStore = create<ContactStoreType>()(
  persist(
    (set) => ({
      data: {
        name: "",
        phoneNumber: "",
        email: "",
        answers: "",
        appeal: "",
      },
      checked: false,
      setData: (key, value) => {
        set((state) => ({
          data: { ...state.data, [key]: value },
        }));
      },
      setChecked: (value) => {
        set(() => ({ checked: value }));
      },
      clearData: () => {
        set(() => ({
          data: {
            name: "",
            phoneNumber: "",
            email: "",
            answers: "",
            appeal: "",
          },
        }));
      },
    }),
    {
      name: "contact-store",
      storage: sessionStorageAvailable,
    },
  ),
);
