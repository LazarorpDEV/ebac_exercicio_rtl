    import { fireEvent, render, screen } from '@testing-library/react'

    import Post from '.'

    describe('Teste para o componente PostComments', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />)

        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    it('Deve inserir dois comentários', () => {
        render(<Post />)

        const textarea = screen.getByTestId('comment-input')
        const button = screen.getByTestId('comment-button')

        fireEvent.change(textarea, {
        target: { value: 'Primeiro comentário' }
        })

        fireEvent.click(button)

        fireEvent.change(textarea, {
        target: { value: 'Segundo comentário' }
        })

        fireEvent.click(button)

        const comments = screen.getAllByTestId('comment')

        expect(comments).toHaveLength(2)
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
    })
    })