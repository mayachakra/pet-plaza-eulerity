import { Pet } from '../models/Pet';

const sampleData: Pet[] = [
    {
        id: '1',
        name: 'Goldie',
        category: 'dog',
        breed: 'Golden Retriever',
        age: 3,
        gender: 'male',
        imageURL: 'https://media.istockphoto.com/id/1971124912/photo/golden.webp?b=1&s=170667a&w=0&k=20&c=-y-rcJBHHpqWdVUpyHj61vh-QBIdf9r5YjpMsbIcto4=',
        description: 'Goldie is from the big apple! She is super friendly and adores the beach!',
        createdAt: new Date('2023-05-01'),
    },
];

export default sampleData;