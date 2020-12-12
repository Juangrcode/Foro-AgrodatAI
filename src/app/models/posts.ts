export interface Post {
    id?: number;
    title?: string;
    photo?: string;
    content: string;
    created?: string;
    modified?: string;
    user: number;
    user_name?: string;
    profile: any;
    community?: any;
    activity?: any;
    comments?: any;
}
