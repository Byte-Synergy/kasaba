import { Elysia } from "elysia";
export declare const app: Elysia<"", {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    error: {
        readonly Unauthorized: import("./utils/error").Unauthorized;
        readonly AccessDenied: import("./utils/error").AccessDenied;
        readonly Conflict: import("./utils/error").Conflict;
        readonly ValidationError: import("./utils/error").ValidationError;
    };
    typebox: import("@sinclair/typebox").TModule<{}, {}>;
}, {
    schema: {};
    macro: {};
    macroFn: {};
    parser: {};
}, {
    api: {
        rest: {
            auth: {
                signIn: {};
            } & {
                signIn: {
                    post: {
                        body: {
                            username: string;
                            password: string;
                        };
                        params: {};
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                id: number;
                                username: string;
                                fullName: string;
                                role: "user" | "admin" | "super_admin";
                                session: {
                                    id: string;
                                    exp: number;
                                };
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            auth: {
                refresh: {};
            } & {
                refresh: {
                    get: {
                        body: unknown;
                        params: {};
                        query: unknown;
                        headers: {
                            authorization: `Refresh ${string}`;
                        };
                        response: {
                            200: {
                                id: string;
                                exp: number;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            news: {
                post: {
                    body: {
                        isTop?: boolean | undefined;
                        files?: File | File[] | undefined;
                        languageCode?: string | undefined;
                        type: "standard" | "photo" | "video" | "area";
                        content: {
                            [x: string]: any;
                        }[];
                        title: string;
                        description: string;
                        tags: string[];
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: `Bearer ${string}`;
                    };
                    response: {
                        200: {
                            files?: {
                                name: string;
                                mimeType: string;
                                extension: string;
                                href: string;
                            }[] | undefined;
                            languageCode?: string | undefined;
                            type: "standard" | "photo" | "video" | "area";
                            content: {
                                [x: string]: any;
                            }[];
                            title: string;
                            description: string;
                            tags: string[];
                            path: string;
                            id: number;
                            createdAt: string;
                            authorId: number;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            } & {
                ":newsPath": {
                    put: {
                        body: {
                            content?: {
                                [x: string]: any;
                            }[] | undefined;
                            title?: string | undefined;
                            description?: string | undefined;
                            tags?: string[] | undefined;
                            isTop?: boolean | undefined;
                            files?: File | File[] | undefined;
                            languageCode?: string | undefined;
                            isArchived?: boolean | undefined;
                        };
                        params: {
                            newsPath: string;
                        };
                        query: unknown;
                        headers: {
                            authorization: `Bearer ${string}`;
                        };
                        response: {
                            200: {
                                id: number;
                                path: string;
                                languageCode: string | undefined;
                                content: any;
                                title: string;
                                description: string;
                                authorId: number;
                                type: import("@prisma/client").$Enums.NewsTypeEnum;
                                tags: string[];
                                createdAt: string;
                                files: {
                                    extension: string;
                                    mimeType: string;
                                    name: string;
                                    href: string;
                                }[];
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            } & {
                ":newsPath": {
                    delete: {
                        body: unknown;
                        params: {
                            newsPath: string;
                        };
                        query: unknown;
                        headers: {
                            authorization: `Bearer ${string}`;
                        };
                        response: {
                            200: {
                                files: {
                                    name: string;
                                    id: number;
                                    createdAt: Date;
                                    updatedAt: Date | null;
                                    mimeType: string;
                                    extension: string;
                                    newsId: number | null;
                                    menuId: number | null;
                                }[];
                                type: import("@prisma/client").$Enums.NewsTypeEnum;
                                content: import("@prisma/client/runtime/library").JsonValue[];
                                title: string;
                                description: string;
                                isTop: boolean;
                                path: string;
                                id: number;
                                createdAt: Date;
                                updatedAt: Date | null;
                                authorId: number;
                                languageCode: string | null;
                                isArchived: boolean;
                                isCheck: boolean;
                                archivedAt: Date | null;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            news: {
                ":newsPath": {
                    get: {
                        body: unknown;
                        params: {
                            newsPath: string;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                files?: {
                                    name: string;
                                    mimeType: string;
                                    extension: string;
                                    href: string;
                                }[] | undefined;
                                languageCode?: string | undefined;
                                type: "standard" | "photo" | "video" | "area";
                                content: {
                                    [x: string]: any;
                                }[];
                                title: string;
                                description: string;
                                tags: string[];
                                isTop: boolean;
                                path: string;
                                id: number;
                                createdAt: string;
                                authorId: number;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            news: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        filter?: {
                            type?: ("standard" | "photo" | "video" | "area")[] | undefined;
                            tags?: string[] | undefined;
                            isTop?: boolean | undefined;
                            isArchived?: boolean | undefined;
                            archivedAt?: Date | undefined;
                            lang?: string | undefined;
                            q?: string | undefined;
                            orderBy?: "asc" | "desc" | undefined;
                        } | undefined;
                        offset?: number | undefined;
                        page: number;
                        limit: number;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            data: {
                                files?: {
                                    name: string;
                                    mimeType: string;
                                    extension: string;
                                    href: string;
                                }[] | undefined;
                                languageCode?: string | undefined;
                                type: "standard" | "photo" | "video" | "area";
                                content: {
                                    [x: string]: any;
                                }[];
                                title: string;
                                description: string;
                                tags: string[];
                                isTop: boolean;
                                path: string;
                                id: number;
                                createdAt: string;
                                authorId: number;
                            }[];
                            count: number;
                            totals: number;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        } & {
            news: {
                count: {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            filter?: {
                                type?: ("standard" | "photo" | "video" | "area")[] | undefined;
                                tags?: string[] | undefined;
                                isTop?: boolean | undefined;
                                isArchived?: boolean | undefined;
                                archivedAt?: Date | undefined;
                                lang?: string | undefined;
                                q?: string | undefined;
                                orderBy?: "asc" | "desc" | undefined;
                            } | undefined;
                        };
                        headers: unknown;
                        response: {
                            200: number;
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            news: {
                categories: {
                    get: {
                        body: unknown;
                        params: {};
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                name: string;
                                id: number;
                            }[];
                        };
                    };
                };
            };
        } & {
            news: {
                categories: {
                    ":categoryName": {
                        get: {
                            body: unknown;
                            params: {
                                categoryName: string;
                            };
                            query: unknown;
                            headers: unknown;
                            response: {
                                200: {
                                    name: string;
                                    id: number;
                                };
                                422: {
                                    type: "validation";
                                    on: string;
                                    summary?: string;
                                    message?: string;
                                    found?: unknown;
                                    property?: string;
                                    expected?: string;
                                };
                            };
                        };
                    };
                };
            };
        } & {
            users: {};
        } & {
            users: {
                getMe: {
                    get: {
                        body: unknown;
                        params: {};
                        query: unknown;
                        headers: {
                            authorization: `Bearer ${string}`;
                        };
                        response: {
                            200: {
                                id: number;
                                fullName: string;
                                username: string;
                                role: import("@prisma/client").$Enums.UserRoleEnum;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            users: {
                ":userId": {
                    get: {
                        body: unknown;
                        params: {
                            userId: number;
                        };
                        query: unknown;
                        headers: {
                            authorization: `Bearer ${string}`;
                        };
                        response: {
                            200: {
                                id: number;
                                username: string;
                                fullName: string;
                                role: "user" | "admin" | "super_admin";
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            users: {
                post: {
                    body: {
                        username: string;
                        fullName: string;
                        role: "user" | "admin";
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: `Bearer ${string}`;
                    };
                    response: {
                        200: {
                            username: string;
                            fullName: string;
                            role: "user" | "admin" | "super_admin";
                            password: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        } & {
            users: {
                ":userId": {
                    put: {
                        body: {
                            username?: string | undefined;
                            fullName?: string | undefined;
                            password: string;
                        };
                        params: {
                            userId: number;
                        };
                        query: unknown;
                        headers: {
                            authorization: `Bearer ${string}`;
                        };
                        response: {
                            200: {
                                id: number;
                                username: string;
                                fullName: string;
                                role: "user" | "admin" | "super_admin";
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            contact: {};
        } & {
            contact: {
                get: {
                    body: unknown;
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: `Bearer ${string}`;
                    };
                    response: {
                        200: {
                            file?: File | undefined;
                            name: string;
                            type: string;
                            id: number;
                            href: string;
                        }[];
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        } & {
            contact: {
                post: {
                    body: {
                        file?: File | undefined;
                        name: string;
                        type: string;
                        href: string;
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: `Bearer ${string}`;
                    };
                    response: {
                        200: {
                            name: string;
                            type: string;
                            id: number;
                            createdAt: Date;
                            updatedAt: Date | null;
                            href: string;
                            fileName: string | null;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        } & {
            contact: {
                ":contactId": {
                    delete: {
                        body: unknown;
                        params: {
                            contactId: number;
                        };
                        query: unknown;
                        headers: {
                            authorization: `Bearer ${string}`;
                        };
                        response: {
                            200: void;
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            appeals: {
                get: {
                    body: unknown;
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: `Bearer ${string}`;
                    };
                    response: {
                        200: {
                            id: number;
                            createdAt: Date;
                            updatedAt: Date | null;
                            fullName: string;
                            email: string;
                            phoneNumber: string;
                            option: string;
                            questionOrSuggestion: string | null;
                        }[];
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        } & {
            appeals: {
                post: {
                    body: {
                        questionOrSuggestion?: string | undefined;
                        fullName: string;
                        email: string;
                        phoneNumber: string;
                        option: string;
                    };
                    params: {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: void;
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        } & {
            places: {};
        } & {
            places: {
                interactive_areas: {
                    ":areaId": {};
                };
            };
        } & {
            places: {
                interactive_areas: {
                    ":areaId": {
                        put: {
                            body: {
                                email?: string | undefined;
                                phoneNumber: string;
                                chairmanFullName: string;
                                chairmanPhoto: File;
                                workingTime: string;
                                address: string;
                                membersCount: number;
                            };
                            params: {
                                areaId: number;
                            };
                            query: unknown;
                            headers: {
                                authorization: `Bearer ${string}`;
                            };
                            response: {
                                200: {
                                    email?: string | undefined;
                                    phoneNumber?: string | undefined;
                                    workingTime?: string | undefined;
                                    id: number;
                                    chairmanFullName: string;
                                    chairmanPhoto: string;
                                    address: string;
                                    membersCount: number;
                                };
                                422: {
                                    type: "validation";
                                    on: string;
                                    summary?: string;
                                    message?: string;
                                    found?: unknown;
                                    property?: string;
                                    expected?: string;
                                };
                            };
                        };
                    };
                };
            };
        } & {
            places: {
                interactive_areas: {
                    ":areaId": {
                        delete: {
                            body: unknown;
                            params: {
                                areaId: number;
                            };
                            query: unknown;
                            headers: {
                                authorization: `Bearer ${string}`;
                            };
                            response: {
                                200: void;
                                422: {
                                    type: "validation";
                                    on: string;
                                    summary?: string;
                                    message?: string;
                                    found?: unknown;
                                    property?: string;
                                    expected?: string;
                                };
                            };
                        };
                    };
                };
            };
        } & {
            places: {
                ":placeId": {
                    get: {
                        body: unknown;
                        params: {
                            placeId: number;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                name?: string | undefined;
                                title: string;
                                id: number;
                                areasCount: number;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            } & {
                ":placeId": {
                    interactive_areas: {
                        get: {
                            body: unknown;
                            params: {
                                placeId: number;
                            };
                            query: {
                                offset?: number | undefined;
                                page: number;
                                limit: number;
                            };
                            headers: unknown;
                            response: {
                                200: {
                                    data: {
                                        email?: string | undefined;
                                        phoneNumber?: string | undefined;
                                        workingTime?: string | undefined;
                                        id: number;
                                        chairmanFullName: string;
                                        chairmanPhoto: string;
                                        address: string;
                                        membersCount: number;
                                    }[];
                                    count: number;
                                    totals: number;
                                };
                                422: {
                                    type: "validation";
                                    on: string;
                                    summary?: string;
                                    message?: string;
                                    found?: unknown;
                                    property?: string;
                                    expected?: string;
                                };
                            };
                        };
                    };
                };
            } & {
                ":placeId": {};
            } & {
                ":placeId": {
                    interactive_areas: {
                        post: {
                            body: {
                                email?: string | undefined;
                                phoneNumber?: string | undefined;
                                workingTime?: string | undefined;
                                chairmanFullName: string;
                                chairmanPhoto: File;
                                address: string;
                                membersCount: number;
                            };
                            params: {
                                placeId: number;
                            };
                            query: unknown;
                            headers: {
                                authorization: `Bearer ${string}`;
                            };
                            response: {
                                200: {
                                    email?: string | undefined;
                                    phoneNumber?: string | undefined;
                                    workingTime?: string | undefined;
                                    id: number;
                                    chairmanFullName: string;
                                    chairmanPhoto: string;
                                    address: string;
                                    membersCount: number;
                                };
                                422: {
                                    type: "validation";
                                    on: string;
                                    summary?: string;
                                    message?: string;
                                    found?: unknown;
                                    property?: string;
                                    expected?: string;
                                };
                            };
                        };
                    };
                };
            };
        } & {
            places: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        filter?: {
                            name?: string | undefined;
                            languageCode?: string | undefined;
                            orderBy?: "asc" | "desc" | undefined;
                        } | undefined;
                        offset?: number | undefined;
                        page: number;
                        limit: number;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            data: {
                                name?: string | undefined;
                                title: string;
                                id: number;
                                areasCount: number;
                            }[];
                            count: number;
                            totals: number;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        } & {
            menus: {
                ":menuId": {
                    delete: {
                        body: unknown;
                        params: {
                            menuId: number;
                        };
                        query: unknown;
                        headers: {
                            authorization: `Bearer ${string}`;
                        };
                        response: {
                            200: void;
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            } & {
                ":menuId": {
                    put: {
                        body: {
                            name?: string | undefined;
                            type?: "photo" | "text" | "news" | "document" | "member" | null | undefined;
                            content?: {
                                [x: string]: any;
                            }[] | undefined;
                            files?: File | File[] | undefined;
                            languageCode?: string | undefined;
                            isPin?: boolean | undefined;
                            isVisible?: boolean | undefined;
                            parentId?: number | undefined;
                        };
                        params: {
                            menuId: number;
                        };
                        query: unknown;
                        headers: {
                            authorization: `Bearer ${string}`;
                        };
                        response: {
                            200: {
                                files?: {
                                    name: string;
                                    mimeType: string;
                                    extension: string;
                                    href: string;
                                }[] | undefined;
                                path?: string | undefined;
                                languageCode?: string | undefined;
                                isPin?: boolean | undefined;
                                isVisible?: boolean | undefined;
                                parent?: {
                                    path?: string | undefined;
                                    name: string;
                                    id: number;
                                } | undefined;
                                children?: {
                                    path?: string | undefined;
                                    name: string;
                                    id: number;
                                }[] | undefined;
                                name: string;
                                content: {
                                    [x: string]: any;
                                }[];
                                id: number;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            } & {
                post: {
                    body: {
                        type?: "photo" | "text" | "news" | "document" | "member" | null | undefined;
                        files?: File | File[] | undefined;
                        languageCode?: string | undefined;
                        newsType?: "standard" | "photo" | "video" | "area" | null | undefined;
                        isPin?: boolean | undefined;
                        isVisible?: boolean | undefined;
                        parentId?: number | undefined;
                        name: string;
                        content: {
                            [x: string]: any;
                        }[];
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: `Bearer ${string}`;
                    };
                    response: {
                        200: {
                            files?: {
                                name: string;
                                mimeType: string;
                                extension: string;
                                href: string;
                            }[] | undefined;
                            path?: string | undefined;
                            languageCode?: string | undefined;
                            isPin?: boolean | undefined;
                            isVisible?: boolean | undefined;
                            parent?: {
                                path?: string | undefined;
                                name: string;
                                id: number;
                            } | undefined;
                            children?: {
                                path?: string | undefined;
                                name: string;
                                id: number;
                            }[] | undefined;
                            name: string;
                            content: {
                                [x: string]: any;
                            }[];
                            id: number;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        } & {
            menus: {
                get: {
                    body: unknown;
                    params: {};
                    query: {
                        filter?: {
                            lang?: string | undefined;
                            q?: string | undefined;
                            orderBy?: "asc" | "desc" | undefined;
                            isPin?: boolean | undefined;
                            parentId?: number | null | undefined;
                            tree?: boolean | undefined;
                        } | undefined;
                        offset?: number | undefined;
                        page: number;
                        limit: number;
                    };
                    headers: unknown;
                    response: {
                        200: {
                            data: {
                                type?: "photo" | "text" | "news" | "document" | "member" | undefined;
                                files?: {
                                    name: string;
                                    mimeType: string;
                                    extension: string;
                                    href: string;
                                }[] | undefined;
                                path?: string | undefined;
                                languageCode?: string | undefined;
                                newsType?: "standard" | "photo" | "video" | "area" | undefined;
                                isPin?: boolean | undefined;
                                isVisible?: boolean | undefined;
                                parent?: {
                                    type?: "photo" | "text" | "news" | "document" | "member" | undefined;
                                    path?: string | undefined;
                                    newsType?: "standard" | "photo" | "video" | "area" | undefined;
                                    isPin?: boolean | undefined;
                                    isVisible?: boolean | undefined;
                                    name: string;
                                    id: number;
                                } | undefined;
                                children?: {
                                    type?: "photo" | "text" | "news" | "document" | "member" | undefined;
                                    content?: {
                                        [x: string]: any;
                                    }[] | undefined;
                                    path?: string | undefined;
                                    createdAt?: string | undefined;
                                    newsType?: "standard" | "photo" | "video" | "area" | undefined;
                                    isPin?: boolean | undefined;
                                    isVisible?: boolean | undefined;
                                    name: string;
                                    id: number;
                                }[] | undefined;
                                name: string;
                                content: {
                                    [x: string]: any;
                                }[];
                                id: number;
                            }[];
                            count: number;
                            totals: number;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        } & {
            menus: {
                tree: {
                    get: {
                        body: unknown;
                        params: {};
                        query: {
                            filter?: {
                                lang?: string | undefined;
                                q?: string | undefined;
                                orderBy?: "asc" | "desc" | undefined;
                                isPin?: boolean | undefined;
                                parentId?: number | null | undefined;
                            } | undefined;
                            page: number;
                        };
                        headers: unknown;
                        response: {
                            200: {
                                type?: "photo" | "text" | "news" | "document" | "member" | undefined;
                                files?: {
                                    type?: "photo" | "text" | "news" | "document" | "member" | undefined;
                                    path?: string | undefined;
                                    newsType?: "standard" | "photo" | "video" | "area" | undefined;
                                    isPin?: boolean | undefined;
                                    isVisible?: boolean | undefined;
                                    name: string;
                                    id: number;
                                }[] | undefined;
                                path?: string | undefined;
                                languageCode?: string | undefined;
                                newsType?: "standard" | "photo" | "video" | "area" | undefined;
                                isPin?: boolean | undefined;
                                isVisible?: boolean | undefined;
                                parent?: {
                                    type?: "photo" | "text" | "news" | "document" | "member" | undefined;
                                    path?: string | undefined;
                                    newsType?: "standard" | "photo" | "video" | "area" | undefined;
                                    isPin?: boolean | undefined;
                                    isVisible?: boolean | undefined;
                                    name: string;
                                    id: number;
                                } | undefined;
                                children?: /*elided*/ any[] | undefined;
                                name: string;
                                content: {
                                    [x: string]: any;
                                }[];
                                id: number;
                            }[];
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            menus: {
                ":menuId": {
                    get: {
                        body: unknown;
                        params: {
                            menuId: number;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                type?: "photo" | "text" | "news" | "document" | "member" | undefined;
                                files?: {
                                    name: string;
                                    mimeType: string;
                                    extension: string;
                                    href: string;
                                }[] | undefined;
                                path?: string | undefined;
                                languageCode?: string | undefined;
                                isPin?: boolean | undefined;
                                isVisible?: boolean | undefined;
                                parent?: {
                                    path?: string | undefined;
                                    name: string;
                                    id: number;
                                } | undefined;
                                children?: {
                                    path?: string | undefined;
                                    name: string;
                                    id: number;
                                }[] | undefined;
                                name: string;
                                content: {
                                    [x: string]: any;
                                }[];
                                id: number;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            banner: {
                post: {
                    body: {
                        type: "fit" | "full";
                        file: File;
                        url: string;
                    };
                    params: {};
                    query: unknown;
                    headers: {
                        authorization: `Bearer ${string}`;
                    };
                    response: {
                        200: {
                            type: "fit" | "full";
                            id: number;
                            file: {
                                name: string;
                                mimeType: string;
                                extension: string;
                                href: string;
                            };
                            url: string;
                        };
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            } & {
                ":bannerId": {
                    delete: {
                        body: unknown;
                        params: {
                            bannerId: number;
                        };
                        query: unknown;
                        headers: {
                            authorization: `Bearer ${string}`;
                        };
                        response: {
                            200: {
                                type: import("@prisma/client").$Enums.BannerTypeEnum;
                                id: number;
                                createdAt: Date;
                                updatedAt: Date | null;
                                fileId: number;
                                url: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            banner: {
                ":bannerId": {
                    get: {
                        body: unknown;
                        params: {
                            bannerId: number;
                        };
                        query: unknown;
                        headers: unknown;
                        response: {
                            200: {
                                type: "fit" | "full";
                                id: number;
                                file: {
                                    name: string;
                                    mimeType: string;
                                    extension: string;
                                    href: string;
                                };
                                url: string;
                            };
                            422: {
                                type: "validation";
                                on: string;
                                summary?: string;
                                message?: string;
                                found?: unknown;
                                property?: string;
                                expected?: string;
                            };
                        };
                    };
                };
            };
        } & {
            banner: {
                get: {
                    body: unknown;
                    params: {};
                    query: unknown;
                    headers: unknown;
                    response: {
                        200: {
                            type: "fit" | "full";
                            id: number;
                            file: {
                                name: string;
                                mimeType: string;
                                extension: string;
                                href: string;
                            };
                            url: string;
                        }[];
                        422: {
                            type: "validation";
                            on: string;
                            summary?: string;
                            message?: string;
                            found?: unknown;
                            property?: string;
                            expected?: string;
                        };
                    };
                };
            };
        };
    };
}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {};
    schema: {
        body: unknown;
        headers: unknown;
        query: unknown;
        params: {};
        cookie: unknown;
        response: {};
    };
}>;
export type AppType = typeof app;
