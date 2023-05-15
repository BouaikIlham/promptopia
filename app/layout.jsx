import Navbar from '@/components/Navbar'
import Provider from '@/components/Provider'
import '@/styles/globals.css'

export const metadata = {
    title: "Promptopia",
    description: "Discover & share AI Prompts"
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <Provider>
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>
                <main className="app">
                    <Navbar />
                    {children}
                </main>
            </body>
        </Provider>
    </html>
  )
}

export default RootLayout