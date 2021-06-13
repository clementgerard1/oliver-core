import Plus from '@modules/plus_'
import { OliverNode } from '@utils/interfaces/OliverObjects'
import {
  getRandomInput,
  process,
  compare,
  getOutput
} from '../utils'
import {
  InputTester,
  ConnectionSetup
} from '../types'

test('process method', () => {
  const obj: OliverNode = new Plus()

  // inputs
  const buffer1: InputTester = getRandomInput()
  const buffer2: InputTester = getRandomInput()

  // connection setup
  const mapping = new Map()
  mapping.set(buffer1.connectors[0], obj.inputs[0])
  mapping.set(buffer2.connectors[1], obj.inputs[1])
  const setup: ConnectionSetup = {
    mapping: mapping
  }

  // expected result
  // const res1 = process()

  // computed result
  const res2 = getOutput(obj, setup, buffer1.nbAudioSamples)

  // expect(compare(res1, res2)).toBe(true)
})
