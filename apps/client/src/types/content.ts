export type ContentType =
  | {
      type: "quote" | "text" | "video-url";
      value: string | null;
    }
  | {
      type: "photo";
      filePreview: string | null;
      fileId: string | null;
    }
  | {
      type: "document";
      docName: string | null;
      fileId: string | null;
    }
  | {
      type: "member";
      members: {
        filePreview: string | null;
        fileId: string | null;
        fullName: string | null;
        phoneNumber: string | null;
        position: string | null;
        email?: string;
        address?: string;
        acceptanceDay?: string;
        workingTime?: string;
      }[];
    };
