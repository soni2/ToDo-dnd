import React from 'react'

const useLocalStorage = (itemName, initialValue) =>{
    
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [items, setItems] = React.useState(initialValue)
    
    React.useEffect(()=>{
        setTimeout(() => {
            try {
              const localTodos = localStorage.getItem(itemName)
              let parsedTodos;
      
              if(!localTodos){
                localStorage.setItem(itemName, JSON.stringify(initialValue))
      
                parsedTodos = initialValue;
              } else {
                parsedTodos = JSON.parse(localStorage.getItem(itemName));
              }
              setItems(parsedTodos);
              setLoading(false);
              
            } catch (error) {
              setError(error)
            }  
        }, 2000);
    },initialValue)

    const saveItem=(newItem) =>{
        try {
            const stringifyedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifyedItem);
            setItems(newItem);

        } catch (error) {
            setError(error)
        }
    }

    return {
      items,
      saveItem,
      loading,
      error,
    }
    
  }

  export {useLocalStorage}