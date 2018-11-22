import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumKeyValuePair' })
export class EnumKeyValuePairPipe implements PipeTransform {
  public transform(value: any, _: string[]): any {
    const result: any[] = [];

    const enumKeys = Object.keys(value);
    enumKeys.forEach(ek => {
      const parsedKey = parseInt(ek, 2);
      if (!isNaN(parsedKey)) {
        result.push({ key: parsedKey, value: value[ek] });
      }
    });

    return result;
  }
}
