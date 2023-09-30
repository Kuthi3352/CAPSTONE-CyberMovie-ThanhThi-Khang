import { Button as ButtonA, ButtonProps as ButtonPropsA } from 'antd'

type ButtonObject = ButtonPropsA 

export const Button = (props: ButtonObject) => {
    return <ButtonA {...props}/>
      
}