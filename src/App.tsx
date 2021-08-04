import React, { useState } from 'react'
import Container from './components/Container'

function App() {
    const [count, setCount]: [number, any] = useState(0)

    const add: any = (): void => setCount(count + 1)

    return (
        <Container>
            <div>{count}</div>
            <div>
                <button onClick={add} className="bg-black text-white">
                    click me
                </button>
            </div>
        </Container>
    )
}

export default App
