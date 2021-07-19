import { Pipe, PipeTransform, ɵPipeDef } from '@angular/core';

@Pipe({
  name: 'xPipe'
})
export class XPipePipe implements PipeTransform {

  // {pipe: [currency, slice], [['en-GB], [0, 3]]}
  // xPipe:col.pipes:col.pipeArgs

  transform(
    value: unknown,
    pipes: PipeTransform[] | undefined,
    pipeArgs: any[][] | undefined
  ): unknown {
    if (!Array.isArray(pipes)) {
      return value;
    }

    console.log('xpipe is running');

    let output = value;
    for (let i = 0; i < pipes.length; i++) {
      const args = pipeArgs ? pipeArgs[i] || [] : [];
      if (pipes[i].transform !== undefined) {
        output = pipes[i].transform(output, ...args);
      } else {
        output = (pipes[i] as unknown as Function)(output, ...args);
      }
    }

    return output;
  }



}
