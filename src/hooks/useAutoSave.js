
import { useEffect, useRef, useState } from 'react';

/**
 * Hook for automatically saving form data after a delay
 * @param {Object} formData - The current form data
 * @param {Function} saveFunction - Function to call to save the data
 * @param {Object} options - Configuration options
 * @returns {Object} - Status of the auto-save
 */
const useAutoSave = (
  formData, 
  saveFunction, 
  { 
    delay = 2000, 
    enabled = true,
    saveOnUnmount = true,
    condition = () => true,
  } = {}
) => {
  const [status, setStatus] = useState('idle'); // 'idle', 'saving', 'saved', 'error'
  const [lastSaved, setLastSaved] = useState(null);
  const [error, setError] = useState(null);
  
  const timerRef = useRef(null);
  const lastDataRef = useRef(formData);
  
  // Trigger save with delay when formData changes
  useEffect(() => {
    if (!enabled) return;
    
    // Check if data has actually changed
    if (JSON.stringify(formData) === JSON.stringify(lastDataRef.current)) return;
    
    // Check custom condition
    if (!condition(formData, lastDataRef.current)) return;
    
    // Update ref with current data
    lastDataRef.current = formData;
    
    // Reset any previous timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    setStatus('pending');
    
    // Set new timer
    timerRef.current = setTimeout(async () => {
      try {
        setStatus('saving');
        await saveFunction(formData);
        setStatus('saved');
        setLastSaved(new Date());
        setError(null);
      } catch (err) {
        setStatus('error');
        setError(err);
      }
    }, delay);
    
    // Cleanup timer on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [formData, saveFunction, delay, enabled, condition]);
  
  // Save on unmount if enabled
  useEffect(() => {
    return () => {
      if (saveOnUnmount && enabled && status === 'pending') {
        saveFunction(formData).catch(err => console.error('Error saving on unmount:', err));
      }
    };
  }, [saveOnUnmount, enabled, status, saveFunction, formData]);
  
  // Function to force save immediately
  const forceSave = async () => {
    if (!enabled) return;
    
    // Clear any pending save
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    try {
      setStatus('saving');
      await saveFunction(formData);
      setStatus('saved');
      setLastSaved(new Date());
      setError(null);
    } catch (err) {
      setStatus('error');
      setError(err);
    }
  };
  
  return {
    status,
    lastSaved,
    error,
    forceSave,
  };
};

export default useAutoSave;
