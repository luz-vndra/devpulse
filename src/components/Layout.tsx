import { type ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100">

      <header className="bg-gray-900 text-white px-6 py-4">
        <h1 className="text-xl font-bold">DevPulse</h1>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>

    </div>
  )
}