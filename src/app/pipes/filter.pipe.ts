import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    // transform(value: unknown, ...args: unknown[]): unknown {
    transform(value: any, arg: any): any {
        if (arg === '' || arg.length < 2) return value;
        const resultPost = [];
        for (const tema of value) {
            console.log(tema);
            if (tema.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                resultPost.push(tema);
            }
        }
        return resultPost;
    }
}
