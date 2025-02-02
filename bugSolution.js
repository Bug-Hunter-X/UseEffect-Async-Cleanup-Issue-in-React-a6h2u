```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status
    async function fetchData() {
      const response = await fetch('/data');
      const data = await response.json();
      if(isMounted) {
        // Update state only if component is still mounted
        // ...
      }
    }
    fetchData();
    return () => { isMounted = false;}; // Cleanup function
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```