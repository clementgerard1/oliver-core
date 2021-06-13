import {
  OliverInputConnector,
  OliverOutputConnector,
  OliverOutputSoundConnector
} from '@utils/interfaces/OliverObjects'

/**
 * @param blockSize Size of audio block during processing
 * @param size Number of audio block
 * @param channels Number of audio channels
 * @param min Minimum value generated
 * @param max Maximum value generated
 */
export interface BufferSetup {
  blockSize: number,
  size: number,
  channels : number,
  min : number,
  max : number
}

/**
 * @param datas one dimentional audio datas
 */
export interface BufferDatas {
  datas: Array<number>
}

/**
 * @param datas array representing channels which contains one dimentional audio datas
 * @param setup description of datas
 * @param connectors output connectors for each channel
 * @param connectors total number of audio sample for each channel
 */
export interface InputTester {
  datas: Array<BufferDatas>,
  setup: BufferSetup,
  connectors: Array<OliverOutputSoundConnector>,
  nbAudioSamples: number
}

/**
 * @mapping datas setup of a connection between two oliver objects
 */
export interface ConnectionSetup{
  mapping : Map<OliverOutputConnector, OliverInputConnector>
}

export interface OutputTester {

}

export interface Buffer {

}

export interface SoundBlock {

}

export interface ComparaisonSetup {

}