import { useState, useEffect } from 'react'

/**
 * useLocalStorage
 * Hook para persistir estado en el localStorage del navegador.
 *
 * Ejemplo de uso:
 *   const [nombre, setNombre] = useLocalStorage('nombre', '')
 */
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error guardando en localStorage:', error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
