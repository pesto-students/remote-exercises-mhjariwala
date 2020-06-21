import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Ceil from '../components/Ceil';


afterEach(cleanup);

describe('Render Ceil', () => {
    const width = 20;
    const height = 20;

    it('render ceil of given width and height.', () => {
        const { getByTestId } = render(<Ceil width={width} height={height} />);
        const ceil = getByTestId('ceil');
        
        expect(ceil).toBeInTheDocument();
        
        const ceilStyle = ceil.style;
        
        expect(ceilStyle.width).toBe(`${width}px`);
        expect(ceilStyle.height).toBe(`${height}px`);
    });

    it('render ceil with food.', () => {
        const { getByTestId } = render(<Ceil isFood
                                            width={width}
                                            height={height} />);
        const ceil = getByTestId('ceil');
        
        expect(ceil).toBeInTheDocument();
        
        expect(ceil.getAttribute('data-food')).toBe('true');
    });

    it('render ceil with snake.', () => {
        const { getByTestId } = render(<Ceil isFood
                                            isSnake
                                            width={width}
                                            height={height} />);
        const ceil = getByTestId('ceil');
        
        expect(ceil).toBeInTheDocument();
        expect(ceil.getAttribute('data-food')).toBe('false');
        expect(ceil.getAttribute('data-snake')).toBe('true');
    });
});