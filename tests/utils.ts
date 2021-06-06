import {
  BufferOption,
  ComparaisonOption,
  InputTester,
  OutputTester,
  Buffer,
  SoundBlock,
  CustomAudioNode
} from './types'

/**
 * Create Input connectable WebAudio Node for testing purpose
 * @param options Options
 * @returns
 */
export function getRandomInput (options? : BufferOption) : InputTester {
  return {}
}

/**
 * Get the output stream of an input node and a process node
 * @param input Input tester object for the test
 * @param testedNode Audio node tested
 * @returns
 */
export function getOutput (input : InputTester, testedNode : CustomAudioNode) : OutputTester {
  return {}
}

/**
 * Test if two buffers are equal
 * @param input
 * @param output
 * @param options Options
 * @returns
 */
export function compare (input: Buffer, output: Buffer, options?: ComparaisonOption): boolean {
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
