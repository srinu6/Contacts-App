import 'react-native';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddEditContact from '../components/addEditContacts'

it('should not call Add Contact', () => {
    //const mockAdd = jest.fn()
    render(<AddEditContact />)
  
    fireEvent.change(screen.getByPlaceholderText(/First Name/i), {
      target: { value: '' }
    })
  
    expect(mockAdd).toHaveBeenCalledTimes(0)
  })