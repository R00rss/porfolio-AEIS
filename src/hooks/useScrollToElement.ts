import { useRef, useCallback } from 'react';
import { NAVBAR_HEIGHT } from '../constants/Menu';

interface Props {
    offSetTop?: number
}

function useScrollToElement<T extends HTMLElement>({ offSetTop = NAVBAR_HEIGHT }: Props) {
    console.log({offSetTop})
    const elementRef = useRef<T>(null);

    const scrollToElement = useCallback(() => {
        if (elementRef.current) {
            elementRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    return [elementRef, scrollToElement] as const;
}
export default useScrollToElement;
