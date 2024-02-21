import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('app file', () => {
  it('renders learn react link', () => {
       render(<App/>);
       const linkElement = screen.getByText(/learn react/i);
       expect(linkElement).toBeInTheDocument();
   })
   it('renders button', () => {
       render(<App/>);
       const element = screen.getByRole('button');
       expect(element).toBeInTheDocument();
   })
   it('renders initial value', () => {
       render(<App initial={0}/>);
       const element = screen.getByText('Press Me 0');
       expect(element).toBeInTheDocument();
   })
   it('increment value when press', () => {
       render(<App initial={0}/>);
       fireEvent.click(screen.getByText(/Press Me 0/i))
       const element = screen.getByText('Press Me 1');
       expect(element).toBeInTheDocument();
   })
});
