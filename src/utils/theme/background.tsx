import { BackgroundProps } from '../../@types/themeTypes';

const Background = ({children }: BackgroundProps) => {
    return (
        // Remove transition-all to disable the background color transition.
        <body className="bg-white dark:bg-black transition-all">
            {children}
        </body>
    )
}

export default Background;