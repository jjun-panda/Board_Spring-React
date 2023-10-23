import React, { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, forwardRef } from 'react'
import './css/style.css'

interface Props {
    labal: string;
    type: 'text' | 'password' | 'email';
    placeholder: string;
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    error: boolean;
    icon?: string;
    onButtonClick?: () => void;
    massage?: string;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
const InputBox = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
    
    const { labal, type, placeholder, value, error, icon, massage } = props;
    const { setValue, onButtonClick, onKeyDown } = props;

    //  input 값 변경 이벤트 처리 함수
    const onClickHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setValue(value);
    }
    //  input 키 이벤트 처리 함수
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(!onKeyDown) return;
        onKeyDown(event);
    }

    return (
        <div className='inputbox'>
            <div className='labal bodyB14x'>{labal}</div>
            <div className={error ? 'container error' : 'container'}>
                <input ref={ref} className='input field16x' type={type} placeholder={placeholder} value={value} onChange={onClickHandler} onKeyDown={onKeyDownHandler} />
                {onButtonClick !== undefined && (
                    <div className='icon-button'>
                        {icon !== undefined && (<div className={`icon ${icon}`}></div>)}
                    </div>
                )}
            </div>
            {massage !== undefined && (<div className='message caption'>{massage}</div>)}
        </div>
    )
});

export default InputBox;