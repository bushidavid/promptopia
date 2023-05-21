import '@styles/global.css';
import { Children } from 'react';
import Navbar from '@components/navbar';
import Provider from '@components/provider';


export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    
    <html lang="en">
        <body>
            <Provider>
                <div className="main">
                    <div className="gradient">
                    </div>
                </div>

                <main className='app'>
                    <Navbar />
                        { children }
                    
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;