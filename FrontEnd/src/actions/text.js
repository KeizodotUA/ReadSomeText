export const addNewText = () => {
    const newText = 'text' + Date.now().toString()
    return {
        type: 'ADD_NEW_TEXT',
        newText
    }
}