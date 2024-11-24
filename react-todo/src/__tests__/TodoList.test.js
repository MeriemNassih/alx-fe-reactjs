import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component', () => {
    render(<TodoList />);
    
    // Vérifie que le titre "Todo List" est affiché
    const titleElement = screen.getByText(/Todo List/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<TodoList />);
    
    // Trouver le champ de saisie et le bouton pour ajouter un todo
    const input = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add Todo/i);
    
    // Simuler la saisie d'un nouveau todo et le soumettre
    fireEvent.change(input, { target: { value: 'Test new todo' } });
    fireEvent.click(addButton);
    
    // Vérifie que le nouveau todo est ajouté à la liste
    const newTodo = screen.getByText('Test new todo');
    expect(newTodo).toBeInTheDocument();
  });

  test('can toggle todo completion', () => {
    render(<TodoList />);
    
    // Ajouter un todo initial
    const initialTodo = screen.getByText('Sample Todo');
    
    // Simuler un clic pour marquer le todo comme terminé
    fireEvent.click(initialTodo);
    
    // Vérifie que le todo est marqué comme terminé (si vous avez une classe ou un texte qui indique cela)
    expect(initialTodo).toHaveClass('completed');  // Assurez-vous que cette classe est présente après le clic
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    
    // Ajouter un todo à supprimer
    const deleteButton = screen.getByText('Delete');
    
    // Simuler un clic pour supprimer le todo
    fireEvent.click(deleteButton);
    
    // Vérifie que le todo n'est plus dans le document
    const deletedTodo = screen.queryByText('Sample Todo');
    expect(deletedTodo).not.toBeInTheDocument();
  });
});
