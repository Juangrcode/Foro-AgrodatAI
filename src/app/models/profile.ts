export interface Profile {
    url?: string;
    id: number;
    owner: string;
    picture: string;
    interests?: string[];
    communities?: string[];
}
