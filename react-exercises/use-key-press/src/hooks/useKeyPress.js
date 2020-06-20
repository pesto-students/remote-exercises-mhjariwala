import { useEffect, useState } from 'react';

function getTargetKey(key) {
    let targetKey = typeof key === 'string' ? key.trim() : '';
    let result = targetKey.match(/<(.+)>/);
    let isControlKey = false;

    if(result && result[1]){
        targetKey = result[1].toLowerCase();
        isControlKey = true;
    }

    return { isControlKey, targetKey };
}

const useKeyPressed = target => {
    const [keyPressed, setKeyPressed] = useState(false);
  
    useEffect(() => {
        const { targetKey, isControlKey } = getTargetKey(target);

        if(!targetKey){
            return;
        }

        const onKeyDown = (e) => {
            const pressedKey = isControlKey ? e.key.toLowerCase() : e.key;

            if (targetKey === pressedKey) {
                setKeyPressed(true);
            }
        }
      
        const onKeyUp = (e) => {
            const pressedKey = isControlKey ? e.key.toLowerCase() : e.key;

            if (targetKey === pressedKey) {
                setKeyPressed(false);
            }
        }

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("keyup", onKeyUp);
    
        return () => {
            if(!targetKey){
                return;
            }

            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("keyup", onKeyUp);
        };
    }, [target]);
  
    return keyPressed;
}

export default useKeyPressed;