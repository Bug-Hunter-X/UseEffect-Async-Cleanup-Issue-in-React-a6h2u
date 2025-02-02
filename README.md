# React useEffect Async Cleanup Issue
This repository demonstrates a common error in React's `useEffect` hook when using asynchronous functions without proper cleanup.  The example shows how an incorrectly implemented asynchronous operation within `useEffect` can lead to memory leaks and unexpected behavior.  The solution provides the correct way to handle such scenarios.

## Bug
The bug lies in the `MyComponent` component's `useEffect` hook. The `fetchData` function performs an asynchronous fetch operation. However, it lacks a cleanup function to cancel or manage the fetch request if the component unmounts before the request completes. This can result in memory leaks, especially if the component is frequently mounted and unmounted.