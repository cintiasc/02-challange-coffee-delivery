import { Minus, Plus } from 'phosphor-react'
import { InputHTMLAttributes, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ButtonCustom, InputContainer, InputCustom } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputName: string
}

export function InputNumber({ inputName, ...rest }: InputProps) {
  const [amount, setAmount] = useState<number>(0)
  const { register } = useFormContext()

  function handleMinus() {
    setAmount((state) => state - 1)
  }
  function handleAdd() {
    setAmount((state) => state + 1)
  }
  return (
    <InputContainer>
      <ButtonCustom type="button" onClick={handleMinus}>
        <Minus size={10} weight="fill" />
      </ButtonCustom>
      <InputCustom
        type="number"
        value={amount}
        {...register(inputName, {
          valueAsNumber: true,
        })}
        {...rest}
      />{' '}
      <ButtonCustom type="button" onClick={handleAdd}>
        <Plus size={10} weight="fill" />
      </ButtonCustom>
    </InputContainer>
  )
}
