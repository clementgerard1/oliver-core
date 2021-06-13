/* Connectors */

export abstract class OliverInputConnector {

}

export abstract class OliverOutputConnector {
  trigger: boolean
}

export class OliverOutputSoundConnector extends OliverOutputConnector {
  datas: Array<number>

  constructor (datas: Array<number>) {
    super()
    this.datas = datas
    this.trigger = true
  }
}

/* Connections */

export abstract class OliverConnection {
  input: OliverInputConnector
  output: OliverOutputConnector
}

export class OliverAudioConnection extends OliverConnection {

}

export class OliverMessageConnection extends OliverConnection {

}

/* Nodes */

export class OliverNode {
  inputs: Array<OliverInputConnector>
  outputs: Array<OliverOutputConnector>
}
