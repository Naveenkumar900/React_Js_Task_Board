const API_URL="https://jsonplaceholder.typicode.com/todos";
export async function fetchTasks() {
    const response=await fetch(API_URL);
    if(!response.ok){
        throw new Error('Failed to Fetch Data')
    }
    const data=await response.json();
    return data;
    
}