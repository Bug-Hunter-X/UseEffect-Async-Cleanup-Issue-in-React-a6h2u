```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using async inside useEffect without a return cleanup function
    async function fetchData() {
      const response = await fetch('/data');
      const data = await response.json();
      // ...
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```