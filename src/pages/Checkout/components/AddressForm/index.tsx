import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { useEffect } from 'react'
import {
  AddressContainer,
  CoffeeCard,
  AddressGroupTitle,
  FormGroup,
  MediumInput,
  ExtLargeInput,
  LargeInput,
  NormalInput,
  LittleInput,
} from './styles'
import { CepNumberMask } from '../../../../Mask/mask'

export function AddressForm({ errorMessage }: any) {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext()

  const cepValue = watch('cep')
  useEffect(() => {
    setValue('cep', CepNumberMask(cepValue))
    if (cepValue?.length > 8) {
      fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then((res) => res.json())
        .then((res) => {
          setValue('street', res.logradouro)
          setValue('district', res.bairro)
          setValue('city', res.localidade)
          setValue('stateAdress', res.uf)
        })
    }
  }, [cepValue, setValue])

  return (
    <AddressContainer>
      <CoffeeCard>
        <AddressGroupTitle>
          <MapPinLine size={22} />
          <div>
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber o seu pedido</p>
          </div>
        </AddressGroupTitle>
        <FormGroup>
          <div>
            {errorMessage && <h6>{errorMessage}</h6>}
            <MediumInput placeholder="CEP" {...register('cep')} />
          </div>
        </FormGroup>
        <FormGroup>
          <ExtLargeInput placeholder="Rua" {...register('street')} />
        </FormGroup>
        <FormGroup>
          <MediumInput placeholder="Número" {...register('number')} />
          <LargeInput
            placeholder="Complemento"
            {...register('addressComplement')}
          />
        </FormGroup>
        <FormGroup>
          <div>
            <MediumInput
              type="text"
              placeholder="Bairro"
              {...register('district')}
            />
          </div>
          <NormalInput placeholder="Cidade" {...register('city')} />
          <LittleInput placeholder="UF" {...register('stateAdress')} />
        </FormGroup>
      </CoffeeCard>
    </AddressContainer>
  )
}
