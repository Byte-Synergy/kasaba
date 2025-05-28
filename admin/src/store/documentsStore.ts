import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { generateFileName } from "@/utils/generateFileName";

export interface ContentState {
  id: number | string;
  type: string;
  value: string | File;
}

export interface DocumentState {
  type: string;
  id: string | number;
  name?: string;
  title?: string;
  content: ContentState[];
  isTop?: boolean;
  categories: string[];
  file?: File | null;
}

export interface UseDocumentState {
  currentDocument: null | DocumentState;
  createDocument: () => DocumentState;
  updateTitle: (title: string) => void;
  updateName: (name: string) => void;
  updateIsTop: () => void;
  updateType: (type: string) => void;
  addCategories: (c: string[]) => void;
  removeCategories: (c: string) => void;
  addContent: (contentItem: Omit<ContentState, "id">) => void;
  updateContent: (
    id: string,
    updatedContent: Partial<Omit<ContentState, "id">>,
  ) => void;
  removeContent: (id: string) => void;
  resetCurrentNews: () => void;
}

export const useDocument = create<UseDocumentState>((set, get) => ({
  currentDocument: null,

  createDocument: () => {
    const existingDocs = get().currentDocument;
    if (existingDocs && existingDocs.id) return existingDocs;

    const newDocs: DocumentState = {
      id: uuidv4(),
      title: "",
      name: "",
      type: "",
      isTop: false,
      file: null,
      content: [],
      categories: [],
    };

    set({ currentDocument: newDocs });
    return newDocs;
  },

  updateTitle: (title: string) => {
    const { currentDocument } = get();
    if (!currentDocument) return;

    set({
      currentDocument: {
        ...currentDocument,
        title,
      },
    });
  },

  updateName: (name: string) => {
    const { currentDocument } = get();
    if (!currentDocument) return;

    set({
      currentDocument: {
        ...currentDocument,
        name: name,
      },
    });
  },

  updateType: (type: string) => {
    const { currentDocument } = get();
    if (!currentDocument) return;

    set({
      currentDocument: {
        ...currentDocument,
        type,
      },
    });

    return currentDocument;
  },

  updateIsTop: () => {
    const { currentDocument } = get();
    if (!currentDocument) return;

    set({
      currentDocument: {
        ...currentDocument,
        isTop: !currentDocument.isTop,
      },
    });

    return currentDocument;
  },

  addCategories: (c: string[]) => {
    const { currentDocument } = get();
    if (!currentDocument) return;

    const uniqueCategories = [
      ...new Set([...currentDocument.categories, ...c]),
    ];

    set({
      currentDocument: {
        ...currentDocument,
        categories: [...uniqueCategories],
      },
    });
  },

  removeCategories: (c: string) => {
    const { currentDocument } = get();
    if (!currentDocument) return;

    const removeCategory = currentDocument.categories.filter(
      (cat) => cat !== c,
    );
    set({
      currentDocument: {
        ...currentDocument,
        categories: [...removeCategory],
      },
    });
  },

  addContent: (contentItem: Omit<ContentState, "id">) => {
    const { currentDocument } = get();
    if (!currentDocument) return;

    if (contentItem.type === "file") {
      if (contentItem.value && contentItem.value instanceof File) {
        const generatedFileName = generateFileName(contentItem.value.name);

        const newFile = new File([contentItem.value], generatedFileName, {
          type: contentItem.value.type,
        });

        const newContent: ContentState = {
          id: uuidv4(),
          ...contentItem,
          value: generatedFileName,
        };

        set({
          currentDocument: {
            ...currentDocument,
            content: [
              ...currentDocument?.content.filter((c) => c.value),
              newContent,
            ],
            file: newFile,
          },
        });

        return;
      }
    }

    const newContent: ContentState = {
      id: uuidv4(),
      ...contentItem,
    };

    set({
      currentDocument: {
        ...currentDocument,
        content: [
          ...currentDocument?.content.filter((c) => c.value),
          newContent,
        ],
      },
    });

    return;
  },

  updateContent: (
    id: string,
    updatedContent: Partial<Omit<ContentState, "id">>,
  ) => {
    const { currentDocument } = get();
    if (!currentDocument) return;

    const oldContent = currentDocument.content.find((item) => item.id === id);
    if (!oldContent) return;

    if (oldContent.type === "file") {
      if (updatedContent.value && updatedContent.value instanceof File) {
        const generatedFileName = generateFileName(updatedContent.value.name);

        const newFile = new File([updatedContent.value], generatedFileName, {
          type: updatedContent.value.type,
        });

        set({
          currentDocument: {
            ...currentDocument,
            content: currentDocument.content.map((item) =>
              item.id === id
                ? {
                    ...item,
                    ...updatedContent,
                    value: generatedFileName,
                  }
                : item,
            ),
            file: newFile,
          },
        });

        return;
      }
    }

    set({
      currentDocument: {
        ...currentDocument,
        content: currentDocument.content.map((item) =>
          item.id === id ? { ...item, ...updatedContent } : item,
        ),
      },
    });

    return;
  },

  removeContent: (id: string) => {
    const { currentDocument } = get();
    if (!currentDocument) return;

    const contentToRemove = currentDocument.content.find((c) => c.id === id);

    set({
      currentDocument: {
        ...currentDocument,
        content: currentDocument.content.filter(
          (c) => c.id !== contentToRemove?.id,
        ),
        file: null,
      },
    });

    return currentDocument;
  },

  resetCurrentNews: () => {
    set({ currentDocument: null });
  },
}));
