import {
  BufferSetup,
  InputTester,
  BufferDatas,
  ConnectionSetup,
  ComparaisonSetup,
  OutputTester,
  Buffer,
  SoundBlock
} from './types'

import {
  OliverNode,
  OliverOutputSoundConnector,
  OliverInputSoundConnector,
  OliverOutputConnector,
  OliverConnection,
  OliverAudioConnection,
  OliverMessageConnection
} from '@utils/interfaces/OliverObjects'

/**
 * Create Input connectable WebAudio Node for testing purpose
 * @param setup Setup object for buffer creation
 * @returns
 */
export function getRandomInput (setup? : BufferSetup) : InputTester {
  if (setup === undefined) {
    setup = defaultBufferSetup
  }

  const range: number = setup.max - setup.min
  if (range < 0) {
    throw new Error('Range of value can\'t be negative')
  }

  const inputTester: InputTester = {
    datas: [],
    setup: setup,
    connectors: [],
    nbAudioSamples: setup.size * setup.blockSize
  }
  for (let i = 0; i < setup.channels; i++) {
    const bufferDatas: BufferDatas = {
      datas: []
    }
    inputTester.datas[i] = bufferDatas

    const outputConnector : OliverOutputSoundConnector = new OliverOutputSoundConnector(
      inputTester.datas[i]
    )
    inputTester.connectors[i] = outputConnector

    for (let j = 0; j < setup.size; j++) {
      for (let k = 0; k < setup.blockSize; k++) {
        const value: number = Math.random() * range + setup.min
        inputTester.datas[i].datas.push(value)
      }
    }
  }

  return inputTester
}

/**
 * Get the output stream of an input node and a process node
 * @param input Input tester object for the test
 * @param testedNode Oliver node tested
 * @param testedNode number of audio sample simulation triggered
 * @returns
 */
export function getOutput (testedNode : OliverNode, setup: ConnectionSetup, nbAudioSamples?: number) : OutputTester {
  // Connections creation / Number of audio processing needed
  const connections: Array<OliverConnection> = []
  setup.mapping.forEach((inputConnector, outputConnector) => {
    // Sound connection
    if (inputConnector instanceof OliverOutputSoundConnector) {
      if (outputConnector instanceof OliverInputSoundConnector) {
        connections.push(new OliverAudioConnection())
      } else {
        throw new Error('Connection not valid')
      }
    }
  })

  // Triggering process
  audioProcessSimulation(connections, nbAudioSamples)

  return {}
}

/**
 * Test if two buffers are equal
 * @param input
 * @param output
 * @param options setup object for comparaison
 * @returns
 */
export function compare (input: Buffer, output: Buffer, setup?: ComparaisonSetup): boolean {
  return true
}

/**
 * Apply a function to a buffer
 * @param {Buffer} input
 * @param {Buffer} func
 * @returns {Buffer}
 */
export function process (input: Buffer, func: (block: SoundBlock) => SoundBlock): Buffer {
  return {}
}

/* DEFAULT OPTIONS */
const defaultBufferSetup : BufferSetup = {
  blockSize: 128,
  size: 3,
  channels: 1,
  min: -1,
  max: 1
}

/* Internal utils */
function audioProcessSimulation (connections: Array<OliverConnection>, nb: number) {
  for (let i = 0; i < nb; i++) {
    for (const key in connections) {
      const connection = connections[key]
      if (connection instanceof OliverAudioConnection) {
        connection.output.process(
          connection.input.getValue()
        )
      }
    }
  }
}
