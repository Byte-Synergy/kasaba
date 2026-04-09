export type ContentType = (
  | {
      type: "quote" | "text" | "video-url";
      value: string | null;
    }
  | {
      type: "photo";
      filePreview?: string | null;
      fileId?: string | null;
      fileUrl?: string | null;
      href?: string | null;
    }
  | {
      type: "document";
      docName?: string | null;
      fileId?: string | null;
      fileUrl?: string | null;
      documents?: {
        fileId: string;
        name: string;
        fileUrl?: string;
      }[];
    }
  | {
      type: "member";
      members: {
        filePreview: string | null;
        fileId: string | null;
        fileUrl?: string | null;
        href?: string | null;
        fullName: string | null;
        phoneNumber: string | null;
        position: string | null;
        email?: string;
        address?: string;
        acceptanceDay?: string;
        workingTime?: string;
      }[];
    }
  | {
      type: "gallery";
      images: Array<{
        href: string;
        name: string;
      }>;
    }
) & { isHidden?: boolean };
