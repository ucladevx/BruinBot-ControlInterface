import React, {useCallback, useEffect} from 'react';
import { ArrowUp, ArrowLeft, ArrowDown, ArrowRight } from 'lucide-react';

function ButtonContainer () {
    const handleKeyDown = useCallback((e) => {
        const keyCode = e.code;
            switch (keyCode) {
                case 'ArrowUp':
                case 'KeyW':
                    sendMessage(e, 'up');
                    break;
                case 'ArrowLeft':
                case 'KeyA':
                    sendMessage(e, 'left');
                    break;
                case 'ArrowDown':
                case 'KeyS':
                    sendMessage(e, 'down');
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    sendMessage(e, 'right');
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
                <tbody>
                    <tr>
                        <td></td>
                        <td><ArrowUp size='50' onClick={(e) => sendMessage(e, 'up')}/></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><ArrowLeft size='50' onClick={(e) => sendMessage(e, 'left')}/></td>
                        <td><ArrowDown size='50' onClick={(e) => sendMessage(e, 'down')}/></td>
                        <td><ArrowRight size='50' onClick={(e) => sendMessage(e, 'right')}/></td>
                    </tr>
                </tbody>
            </table>            
        </div>
    );
}

export default ButtonContainer;