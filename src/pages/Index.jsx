import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-xl mb-4">Welcome to My App</h2>
        <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
        <div className="mb-4">
          <p>Count: {count}</p>
          <Button onClick={() => setCount(count + 1)} className="mr-2 bg-green-500 hover:bg-green-600">Increment</Button>
          <Button onClick={() => setCount(count - 1)} className="bg-red-500 hover:bg-red-600 text-white">Decrement</Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
