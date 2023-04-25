import { useState, useEffect, createContext, useContext } from 'react';
 const context = createContext(null)

export const AuthProvider = ({ children }) => {
    const [theme, setTheme] = useState('light-theme')

    const user = {
        name: 'Amando',
        bio: 'frontend & backend developer',
        image:'https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg'
    }

    const toggle = () => {
        theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme')
    }

    useEffect(() => {
        console.log(document.body)
        document.body.className = theme
    }, [theme])

    // console.log(children,'children');
    console.log(theme,'theme');
    return (<context.Provider value={{ theme, user, toggle }}> {children}</context.Provider>)

}

// export const UserComsumer = context.Consumer

export const useAuth = () => useContext(context)
