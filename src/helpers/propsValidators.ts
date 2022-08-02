import testsPayload from '../../test/testsPayload'
import { Breakpoints, Layout } from '@/types/helpers'

const { keysValidatorPayload, layoutValidatorPayload } = testsPayload

export const breakpointsValidator = (cols: Breakpoints): boolean => {
  const propColsKeys = (Object.keys(cols) as (keyof typeof cols)[])
  const colsValues = propColsKeys.map(k => typeof cols[k] === 'number')

  return keysValidator(keysValidatorPayload.validKeys, propColsKeys) && colsValues.indexOf(false) === -1
}

export const keysValidator = (requiredKeys: string[], propsKeys: string[]): boolean => {
  const coincidenceKeys = propsKeys.filter(k => requiredKeys.indexOf(k) >= 0)

  return propsKeys.length >= requiredKeys.length && coincidenceKeys.length === requiredKeys.length
}

export const layoutValidator = (layout: Layout) => {
  const { validOptionalLayout, validRequiredLayout } = layoutValidatorPayload
  const validLayout = { ...validRequiredLayout, ...validOptionalLayout }
  const requiredKeys = Object.keys(validRequiredLayout)
  const requiredKeysValid = layout.map(l => keysValidator(requiredKeys, Object.keys(l)))

  if (requiredKeysValid.includes(false)) return false

  const validTypes = layout.map(l => {
    const layoutItemKeys = (Object.keys(l) as (keyof typeof l)[])

    return layoutItemKeys
      .map(k => typeof l[k] === typeof validLayout[k])
      .includes(false) || isNaN(parseInt(l.i))
  })

  return !validTypes.includes(true)
}

export const marginValidator = (value: [number, number]): boolean => {
  const values = value.map(v => typeof v === 'number')
  const isLength = value.length === 2

  return values.indexOf(false) === -1 && isLength
}
