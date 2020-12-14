import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterMyCommunities',
})
export class FilterMyCommunitiesPipe implements PipeTransform {
    transform(value: any, arg: any): any {
        if (arg === '' || arg.length < 2) return value;
        const resultPost = [];
        for (const tema of value) {
            if (tema.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                resultPost.push(tema);
            }
        }
        for (const tema of value) {
            if (
                tema.activity.name.toLowerCase().indexOf(arg.toLowerCase()) > -1
            ) {
                resultPost.push(tema);
            }
        }
        return resultPost;
    }
}
