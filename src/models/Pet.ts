export interface Pet {
    id: string;
    name: string;
    category?: string;
    breed?: string;
    age?: number;
    gender?: 'male' | 'female';
    imageURL: string;
    description: string;
    createdAt: Date;
}