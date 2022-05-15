import React, {useCallback, useEffect} from 'react';
import { ArrowUp, ArrowLeft, ArrowDown, ArrowRight } from 'lucide-react';

function ButtonContainer () {
    const handleKeyDown = useCallback((e) => {
        const keyCode = e.code;
            switch (keyCode) {
                case 'ArrowUp':
                case 'KeyW':
                    console.log('up-key');
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    console.log('left-key');
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    console.log('down-key');
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    console.log('right-key');
                    break;
                default:
                    break;
            }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, [handleKeyDown]);
    
    const sendMessage = (e, m) => {
        e.preventDefault();
        console.log(m);
    }
    return(
        <div>
            <table>
                <tr>
                    <td></td>
                    <td><ArrowUp size='50' onClick={(e) => sendMessage(e, 'up-click')}/></td>
                    <td></td>
                </tr>
                <tr>
                    <td><ArrowLeft size='50' onClick={(e) => sendMessage(e, 'left-click')}/></td>
                    <td><ArrowDown size='50' onClick={(e) => sendMessage(e, 'down-click')}/></td>
                    <td><ArrowRight size='50' onClick={(e) => sendMessage(e, 'right-click')}/></td>
                </tr>
            </table>            
        </div>
    );
}

export default ButtonContainer;