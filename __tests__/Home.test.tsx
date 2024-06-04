import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { getData } from '@/helpers';

// Mock the getData function
jest.mock('@/helpers', () => ({
    getData: jest.fn(),
}));

const mockGetData = getData as jest.MockedFunction<typeof getData>;

const mockProducts = [
    {
        _id: 1,
        title: 'Product 1',
        image: '/image1.jpg',
        price: 100,
        previousPrice: 120,
        isNew: true,
        category: 'Category 1',
        brand: 'Brand 1',
    },
    {
        _id: 2,
        title: 'Product 2',
        image: '/image2.jpg',
        price: 200,
        previousPrice: 220,
        isNew: false,
        category: 'Category 2',
        brand: 'Brand 2',
    },
];

describe('Home Component', () => {
    it('should display loading initially', () => {
        render(<Home />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should display error message when fetch fails', async () => {
        mockGetData.mockRejectedValueOnce(new Error('Failed to fetch'));

        render(<Home />);
        const errorMessage = await screen.findByText('Error: Failed to fetch');
        expect(errorMessage).toBeInTheDocument();
    });

    it('should display products when fetch succeeds', async () => {
        mockGetData.mockResolvedValueOnce(mockProducts);

        render(<Home />);
        const productTitle1 = await screen.findByText('Product 1');
        const productTitle2 = await screen.findByText('Product 2');

        expect(productTitle1).toBeInTheDocument();
        expect(productTitle2).toBeInTheDocument();
    });
});
